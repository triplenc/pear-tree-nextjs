import type { NextPage } from "next";

import { Button } from "@components/common";
import { Splash } from "@components/home/Splash";
import Chicken from "@icons/chicken.svg";
import Star from "@icons/star.svg";
import { colors } from "@styles";

const Home: NextPage = () => {
  return (
    <>
      <Splash />
      <div>
        <Button>
          <Chicken />
        </Button>
        <Star fill={colors.main01} />
      </div>
    </>
  );
};

export default Home;
