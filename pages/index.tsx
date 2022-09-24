import type { NextPage } from "next";

import { Layout } from "@components/common";
import { MapComponent } from "@components/home/Map";
import { Splash } from "@components/home/Splash";

const Home: NextPage = () => {
  return (
    <>
      <Splash />
      <Layout headerType="locationSearch">
        home page
        <MapComponent lattitude={33.5563} longitude={126.79581} />
      </Layout>
    </>
  );
};

export default Home;
