import { City } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "pages/_app";
import { api } from "services/api";

export const useCity = () => {
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
    const { data } = await api.post<City>("/city", {
      name,
      description,
    });

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await api.post(`/city/${data.id}/image`, formData);
    } catch {}
  };

  const handleDeleteCity = async (id: string) => {
    await deleteMutation.mutateAsync(id);
  };

  return { queryKey, handleDeleteCity, handleCreateCity };
};
