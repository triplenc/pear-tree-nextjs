import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@components/common";

const MyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>내 정보</title>
      </Head>
      <Layout>마이 페이지</Layout>
    </>
  );
};

export default MyPage;
