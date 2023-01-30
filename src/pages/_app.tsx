import { AppProvider } from "context";
import type { AppProps } from "next/app";
import { globalStyles, GlobalStyles } from "styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <GlobalStyles />

      <AppProvider>
        <Component {...pageProps} />

        <ToastContainer />
      </AppProvider>
    </>
  );
}
