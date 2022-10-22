import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@components/common";

const Map: NextPage = () => {
  return (
    <>
      <Head>
        <title>지도</title>
      </Head>
      <Layout isShowBottomNavigation={false}>내 위치 지도</Layout>
    </>
  );
};

export default Map;
