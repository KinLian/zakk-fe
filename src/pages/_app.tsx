import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AuthProvider } from '@/contexts';

const darkTheme = createTheme({
  type: 'dark',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <AuthProvider>
          <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
