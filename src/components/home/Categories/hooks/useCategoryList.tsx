import { useState } from "react";

import { Category } from "../interfaces";

// TODO: icon 순서 및 image url, path, name 백엔드 이관
export const useCategoryList = () => {
  const [categoryList] = useState<Category[]>([
    {
      image: "/images/spoon-and-chopstick.png",
      name: "전체",
      path: "all",
    },
    {
      image: "/images/rice-bowl.png",
      name: "한식",
      path: "korean",
    },
    {
      image: "/images/chinese.png",
      name: "중식",
      path: "chinese",
    },
    {
      image: "/images/sushi.png",
      name: "일식/회",
      path: "japanese",
    },
    {
      image: "/images/pasta.png",
      name: "양식",
      path: "pasta",
    },
    {
      image: "/images/dduckbokki.png",
      name: "분식",
      path: "dduckbokki",
    },
    {
      image: "/images/chicken.png",
      name: "치킨/고기",
      path: "chicken",
    },
    {
      image: "/images/pizza.png",
      name: "피자",
      path: "pizza",
    },
    {
      image: "/images/burger.png",
      name: "버거",
      path: "burger",
    },
    {
      image: "/images/soup.png",
      name: "찜/탕",
      path: "soup",
    },
    {
      image: "/images/doughnut.png",
      name: "카페/디저트",
      path: "doughnut",
    },
    {
      image: "/images/avocado.png",
      name: "샐러드",
      path: "salad",
    },
  ]);
  return categoryList;
};
