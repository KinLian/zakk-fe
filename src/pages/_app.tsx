import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const darkTheme = createTheme({
  type: 'dark',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  // This ensures that data is not shared
  // between different users and requests
  const [queryClient] = useState(() => new QueryClient());

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default MyApp;
