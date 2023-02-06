import { AxiosError } from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";

type HandleOptions = {
  title: string;
  callback?: string;
};

type HandleErrorOptions = HandleOptions;

type HandleSuccessOptions = HandleOptions;

export const useFeedback = () => {
  const handleError = useCallback((error: any, options: HandleErrorOptions) => {
    if (error instanceof AxiosError) {
      const { response } = error;

      if (response) {
        const {
          data: { message },
        } = response;

        const title = message || options.title;

        toast(title, {
          icon: "❌",
          type: "error",
        });
      }
    }
  }, []);

  const handleSuccess = useCallback((options: HandleSuccessOptions) => {
    const { title } = options;

    toast(title, {
      icon: "✅",
      type: "success",
    });
  }, []);

  return { handleError, handleSuccess };
};
