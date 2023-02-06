import { useQuery as useReactQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { api } from "services/api";

export const useQuery = <T>(
  key: Array<string | number>,
  endpoint: string,
  config?: AxiosRequestConfig
) => {
  const query = useReactQuery(key, async () => {
    const { data } = await api.get<T>(endpoint, config);

    return data;
  });

  return { ...query };
};
