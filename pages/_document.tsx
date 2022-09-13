import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@styles";

export const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta content="배달료 쉐어 서비스" name="description" />
        <meta charSet="UTF-8" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <style
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          id="stitches"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
