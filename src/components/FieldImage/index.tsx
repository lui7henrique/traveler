import {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { Tooltip } from "components/Tooltip";

import { MdErrorOutline } from "react-icons/md";
import { FieldError } from "react-hook-form";

import * as S from "./styles";

export type FieldTextProps = {
  label: string;
  error?: FieldError;
  contentProps?: typeof S.Content.defaultProps;

  setState?: (file: File) => void;
};

export const FieldImage = (props: FieldTextProps) => {
  const { label, error, contentProps, setState } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const placeholder = useMemo(() => {
    if (file) {
      return file.name;
    }

    return "+ Adicionar uma foto";
  }, [file]);

  const imagePreview = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
  }, [file]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      if (files) {
        const file = files[0];
        setFile(file);

        setState && setState(file);
      }
    },
    [setState]
  );

  return (
    <S.Container>
      <S.Label error={!!error}>
        {label}

        {error?.message && (
          <Tooltip content={error?.message}>
            <MdErrorOutline size={16} />
          </Tooltip>
        )}
      </S.Label>

      <S.Content
        {...contentProps}
        style={error && "error"}
        onClick={() => ref.current?.click()}
      >
        {file && imagePreview && (
          <S.ImageWrapper>
            <S.ImagePreview src={imagePreview} alt={file?.name} fill />
          </S.ImageWrapper>
        )}

        <S.Placeholder>{placeholder}</S.Placeholder>

        <S.Input
          ref={ref}
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={handleChange}
        />
      </S.Content>
    </S.Container>
  );
};
