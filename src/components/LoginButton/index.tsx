import { Button, ButtonProps } from "components/Button";
import { useAttempts } from "context/attempts";

import { useEffect, useState } from "react";

type LoginButtonProps = Omit<ButtonProps, "children">;

const LOGIN_COOLDOWN_KEY = "@traveler-login-cooldown";

export const LoginButton = (props: LoginButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [cooldown, setCooldown] = useState<number | null>(null);

  const { attemptsAmount, resetAttemptsAmount } = useAttempts();

  useEffect(() => {
    if (attemptsAmount >= 5) {
      const newCooldown = 30;

      setCooldown(newCooldown);
      localStorage.setItem(LOGIN_COOLDOWN_KEY, String(newCooldown));

      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [attemptsAmount]);

  useEffect(() => {
    if (cooldown === 0) {
      setIsDisabled(false);
      resetAttemptsAmount();

      localStorage.removeItem(LOGIN_COOLDOWN_KEY);

      window.location.reload();
    }

    if (cooldown !== null) {
      setTimeout(
        () =>
          setCooldown((prevCooldown) => {
            const newCooldown = (prevCooldown as number) - 1;
            localStorage.setItem(LOGIN_COOLDOWN_KEY, String(newCooldown));

            return newCooldown;
          }),
        1000
      );
    }
  }, [cooldown]);

  useEffect(() => {
    const cooldownStorage = localStorage.getItem(LOGIN_COOLDOWN_KEY);

    if (cooldownStorage) {
      setCooldown(Number(cooldownStorage));
    }
  }, []);

  return (
    <Button {...props} disabled={isDisabled}>
      {isDisabled ? `Tente novamente em ${cooldown}s` : "Entrar"}
    </Button>
  );
};
