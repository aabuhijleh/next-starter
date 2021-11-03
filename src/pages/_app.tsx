import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/globals";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
