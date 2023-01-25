import { LoginForm } from "./LoginForm";
import * as S from "./styles";

export const LoginTemplate = () => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image
          src="/assets/login/banner.jpg"
          alt="login banner"
          fill
          quality={100}
        />
      </S.ImageWrapper>

      <S.Content>
        <LoginForm />
      </S.Content>
    </S.Container>
  );
};
