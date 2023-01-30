import { TypeOptions } from "react-toastify";

export type FeedbackStatus = 200 | 401;

type Feedback = {
  title: string;
  message: string;
  icon: string;
  type: TypeOptions;
};

export const feedback = (status: number) => {
  const feedbackByStatus: Record<FeedbackStatus, Feedback> = {
    200: {
      title: "Login feito som sucesso",
      message: "Bem-vindo à plataforma.",
      icon: "✅",
      type: "success",
    },
    401: {
      title: "Não foi possível fazer o login",
      message: "Verifique as credenciais ou tente novamente mais tarde",
      icon: "❌",
      type: "error",
    },
  };

  return feedbackByStatus[status as FeedbackStatus] || feedbackByStatus[401];
};
