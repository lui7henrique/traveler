import { City } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useFeedback } from "hooks/useFeedback";
import { useRouter } from "next/router";
import { queryClient } from "pages/_app";
import { api } from "services/api";

export type CreateCityParams = {
  name: string;
  description: string;
  image: File;
};

export const useCity = () => {
  const { push, asPath } = useRouter();
  const { handleError, handleSuccess } = useFeedback();

  const queryKey = ["cities"];

  const createMutation = useMutation(
    async (params: CreateCityParams) => {
      const { description, image, name } = params;

      try {
        const { data } = await api.post<City>("/city", {
          name,
          description,
        });

        try {
          const formData = new FormData();
          formData.append("image", image);

          await api.post(`/city/${data.id}/image`, formData);

          handleSuccess({ title: "Cidade criada com sucesso." });
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
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  const deleteMutation = useMutation(
    async (id: string) => {
      try {
        await api.delete(`/city/${id}`);

        handleSuccess({ title: "Cidade excluída com sucesso." });
      } catch (error) {
        handleError(error, {
          title: "Não foi possível excluir a cidade",
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey);
      },
    }
  );

  const handleCreateCity = async (params: CreateCityParams) => {
    await createMutation.mutateAsync(params);
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
