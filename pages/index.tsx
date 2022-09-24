import type { NextPage } from "next";

import { Button } from "@components/common";
import { MapComponent } from "@components/home/Map";
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
        <MapComponent lattitude={33.5563} longitude={126.79581} />
      </div>
    </>
  );
};

export default Home;
