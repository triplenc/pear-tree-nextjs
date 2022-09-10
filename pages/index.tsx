import type { NextPage } from "next";

import { Button } from "@components/common";
import { colors } from "@components/stitches.config";
import Chicken from "@icons/chicken.svg";
import Star from "@icons/star.svg";

const Home: NextPage = () => {
  return (
    <div>
      <button onClick={() => console.info(1234)}>
        <Button>
          <Chicken />
        </Button>
        <Star fill={colors.main01} />
      </button>
    </div>
  );
};

export default Home;
