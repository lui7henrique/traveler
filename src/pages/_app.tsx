import { AppProvider } from "context";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { globalStyles, GlobalStyles } from "styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <AppProvider>
            <Component {...pageProps} />

            <ToastContainer
              toastStyle={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderRadius: "2px",
              }}
            />
          </AppProvider>
        </SessionProvider>
      </QueryClientProvider>
    </>
  );
}
