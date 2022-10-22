import type { NextPage } from "next";

import { Divider, Layout } from "@components/common";
import { Categories, MapHome, Splash } from "@components/home";

const Home: NextPage = () => {
  return (
    <>
      <Splash />
      <Layout headerType="locationSearch">
        <Categories />
        <Divider height="6" />
        <MapHome />
      </Layout>
    </>
  );
};

export default Home;
