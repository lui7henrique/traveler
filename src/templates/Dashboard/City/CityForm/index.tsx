import { useCallback, useEffect, useState } from "react";
import { useForm, FieldError } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "components/Button";
import { FieldImage } from "components/FieldImage";
import { FieldText } from "components/FieldText";
import { FieldTextArea } from "components/FieldTextArea";

import { CityFormData, citySchema } from "./schema";

import { FormBox } from "layouts/Dashboard/components/FormBox";
import { useCity } from "hooks/modules/useCity";

export const CityForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const { handleCreateCity } = useCity();

  const {
    register,
    formState: { errors, isSubmitted },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm<CityFormData>({
    resolver: zodResolver(citySchema),
  });

  const onSubmit = useCallback(
    async (data: CityFormData) => {
      if (image) {
        const { name, description } = data;

        handleCreateCity(name, description, image);
      }
    },
    [handleCreateCity, image]
  );

  useEffect(() => {
    if (!isSubmitted) return;

    if (image) {
      clearErrors("image");
    }

    if (!image) {
      setError("image", {
        message: "Imagem é um campo obrigatório",
        type: "required",
      });
    }
  }, [clearErrors, image, isSubmitted, setError]);

  return (
    <FormBox
      step="01"
      title="Adicione uma cidade"
      subtitle="Dados da cidade"
      button={
        <Button color="green" type="submit">
          Concluir
        </Button>
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldText
        label="Nome da cidade"
        placeholder="São Paulo"
        {...register("name")}
        error={errors.name}
      />
      <FieldImage
        label="Foto da cidade"
        setState={setImage}
        error={errors.image as FieldError}
      />
      <FieldTextArea
        label="Descrição da cidade"
        placeholder="São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554."
        error={errors.description}
        {...register("description")}
      />
    </FormBox>
  );
};
