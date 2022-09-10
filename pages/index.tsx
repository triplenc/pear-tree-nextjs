import type { NextPage } from "next";
import Head from "next/head";

import { colors } from "@components/stitches.config";
import Chicken from "@icons/chicken.svg";
import Star from "@icons/star.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>배나무</title>
      </Head>
      <button onClick={() => console.info(1234)}>
        <Chicken />
        <Star fill={colors.main01} />
      </button>
    </div>
  );
};

export default Home;
