import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { RecoilRoot } from "recoil";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@styles/globals.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>배나무</title>
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Script
            id="kakao-maps"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f8338f090ba2ad676429eefdd0fdbb01&autoload=false&libraries=services,clusterer,drawing"
            strategy="beforeInteractive"
            onError={(e) => {
              console.error("map을 불러오지 못했습니다", e);
            }}
          />
          <Component {...pageProps} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
