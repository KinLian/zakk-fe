import "@styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";
import { Layout } from "@/components/Layout";
import { ProvideAuth } from "@/providers/auth";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ProvideAuth>
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
  </ProvideAuth>
);

export default MyApp;
