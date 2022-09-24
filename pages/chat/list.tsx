import type { NextPage } from "next";
import Head from "next/head";

import { Layout } from "@components/common";

const ChatList: NextPage = () => {
  return (
    <>
      <Head>
        <title>채팅방 목록</title>
      </Head>
      <Layout>채팅방 목록</Layout>
    </>
  );
};

export default ChatList;
