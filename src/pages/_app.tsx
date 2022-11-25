import "@styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { Layout } from "@/components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
