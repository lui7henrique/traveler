import { City } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useFeedback } from "hooks/useFeedback";
import { useRouter } from "next/router";
import { queryClient } from "pages/_app";
import { api } from "services/api";

export const useCity = () => {
  const { push, asPath } = useRouter();
  const { handleError, handleSuccess } = useFeedback();

  const queryKey = ["cities"];

  const deleteMutation = useMutation(
    async (id: string) => {
      await api.delete(`/city/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  const handleCreateCity = async (
    name: string,
    description: string,
    image: File
  ) => {
    try {
      const { data } = await api.post<City>("/city", {
        name,
        description,
      });

      try {
        const formData = new FormData();
        formData.append("image", image);

        await api.post(`/city/${data.id}/image`, formData);

        handleSuccess({ title: "Cidade criada com sucesso" });
        push("/dashboard/city");
      } catch (error) {
        handleError(error, {
          title: "Não foi possível cadastrar imagem à cidade.",
          callback: "Verifique a imagem ou tente novamente.",
        });
      }
    } catch (error) {
      handleError(error, {
        title: "Não foi possível cadastrar a cidade",
        callback: "Verifique os dados ou tente novamente.",
      });
    }
  };

  const handleDeleteCity = async (id: string) => {
    const isInProfilePage = asPath.includes("profile");

    if (isInProfilePage) {
      await push("/dashboard/city");
    }

    await deleteMutation.mutateAsync(id);
  };

  return { queryKey, handleDeleteCity, handleCreateCity };
};
