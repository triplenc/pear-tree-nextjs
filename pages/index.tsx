import type { NextPage } from "next";
import Head from "next/head";

import Chicken from "@icons/chicken.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>배나무</title>
        <meta name="description" content="배달료 쉐어 서비스" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Chicken />
    </div>
  );
};

export default Home;
