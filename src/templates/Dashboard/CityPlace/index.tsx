import { Controller, useForm, FieldError } from "react-hook-form";

import { Button } from "components/Button";
import { FieldImage } from "components/FieldImage";
import { FieldPlaceCategoryCheckbox } from "components/FieldPlaceCategoryCheckbox";
import { useCallback, useEffect, useState } from "react";

import { FieldText } from "components/FieldText";
import { FieldTextArea } from "components/FieldTextArea";

import { DashboardLayout } from "layouts/Dashboard";
import { FormBox } from "layouts/Dashboard/components/FormBox";
import { DashboardLimiter } from "layouts/Dashboard/components/Limiter";

import { CityPlaceFormData, cityPlaceSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const CityPlaceTemplate = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitted },
    clearErrors,
    setError,
  } = useForm<CityPlaceFormData>({
    resolver: zodResolver(cityPlaceSchema),
  });

  const [image, setImage] = useState<File | null>(null);

  const onSubmit = useCallback(
    (data: CityPlaceFormData) => {
      console.log({ data, image });
    },
    [image]
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
    <DashboardLayout subTitle="Adicionar um local" hasBackButton>
      <DashboardLimiter>
        <FormBox
          step="01"
          title="Adicione um local"
          button={
            <Button color="green" type="submit">
              Concluir
            </Button>
          }
          sections={[
            {
              title: "Dados Básicos",
              fields: (
                <>
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

                  <Controller
                    name="category"
                    control={control}
                    render={({ field: { onChange } }) => {
                      return <FieldPlaceCategoryCheckbox onChange={onChange} />;
                    }}
                  />
                </>
              ),
            },
          ]}
          onSubmit={handleSubmit(onSubmit)}
        />
      </DashboardLimiter>
    </DashboardLayout>
  );
};
