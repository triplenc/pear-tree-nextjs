import { useMemo } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CATEGORY } from "src/constants";

import { Layout } from "@components/common";
import { CategoryBar, PlatformTagList } from "@components/party";

const PartyList: NextPage = () => {
  const router = useRouter();

  const headerConfig = useMemo(() => {
    return { bottomBorder: false };
  }, []);

  return (
    <>
      <Head>
        <title>
          {CATEGORY[router.query.category as keyof typeof CATEGORY]} 파티 목록
        </title>
      </Head>
      <Layout headerConfig={headerConfig} isShowBottomNavigation={false}>
        <CategoryBar />
        <PlatformTagList />
      </Layout>
    </>
  );
};

export default PartyList;
