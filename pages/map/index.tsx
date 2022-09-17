import type { NextPage } from "next";
import Head from "next/head";

import { MapComponent } from "@components/home/Map";

const Map: NextPage = () => {
  return (
    <div>
      <Head>
        <title>지도</title>
      </Head>
      <MapComponent />
    </div>
  );
};

export default Map;
