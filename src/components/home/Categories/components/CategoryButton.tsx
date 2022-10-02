import Link from "next/link";

import { Caption } from "@components/common";
import AvocadoIcon from "@icons/avocado.svg";
import BurgerIcon from "@icons/burger.svg";
import ChickenIcon from "@icons/chicken.svg";
import ChineseFoodIcon from "@icons/chinese-food.svg";
import DduckbokkiIcon from "@icons/dduckbokki.svg";
import DoughnutIcon from "@icons/doughnut.svg";
import PastaIcon from "@icons/pasta.svg";
import PizzaIcon from "@icons/pizza.svg";
import RiceBowlIcon from "@icons/rice-bowl.svg";
import SoupIcon from "@icons/soup.svg";
import SpoonAndChopstickIcon from "@icons/spoon-and-chopstick.svg";
import SushiIcon from "@icons/sushi.svg";
import { flexColumnCreator, styled } from "@styles";
import { CategoryKey, CategoryName } from "@types";

const CATEGORY_ICON_SET = {
  all: <SpoonAndChopstickIcon />,
  burger: <BurgerIcon />,
  chicken: <ChickenIcon />,
  chinese: <ChineseFoodIcon />,
  dduckbokki: <DduckbokkiIcon />,
  doughnut: <DoughnutIcon />,
  japanese: <SushiIcon />,
  korean: <RiceBowlIcon />,
  pasta: <PastaIcon />,
  pizza: <PizzaIcon />,
  salad: <AvocadoIcon />,
  soup: <SoupIcon />,
} as const;

const CategoryLink = styled("a", {
  ...flexColumnCreator("center", "center", "$2"),
  height: "7.2rem",
  width: "20%",
});

export function CategoryButton({
  categoryKey,
  name,
}: {
  categoryKey: CategoryKey;
  name: CategoryName;
}) {
  return (
    <Link passHref href={`/category/${categoryKey}`}>
      <CategoryLink>
        {CATEGORY_ICON_SET[categoryKey]}
        <Caption>{name}</Caption>
      </CategoryLink>
    </Link>
  );
}
