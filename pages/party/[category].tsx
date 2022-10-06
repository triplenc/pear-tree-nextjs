import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CATEGORY } from "src/constants";

import { Layout } from "@components/common";

const PartyList: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          {CATEGORY[router.query.category as keyof typeof CATEGORY]} 파티 목록
        </title>
      </Head>
      <Layout isShowBottomNavigation={false}>파티 목록</Layout>
    </>
  );
};

export default PartyList;
