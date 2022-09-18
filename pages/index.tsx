import type { NextPage } from "next";

import { Layout } from "@components/common";
import { Splash } from "@components/home/Splash";

const Home: NextPage = () => {
  return (
    <>
      <Splash />
      <Layout headerType="locationSearch">home page</Layout>
    </>
  );
};

export default Home;
