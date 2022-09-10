import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@components/stitches.config";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="배달료 쉐어 서비스" />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
