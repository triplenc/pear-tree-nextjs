import { useState } from "react";

import { CategoryKey, CategoryName } from "@types";

interface Category {
  key: CategoryKey;
  name: CategoryName;
}
// TODO: icon 순서 및 image url, key, name 백엔드 이관
export const useCategoryList = () => {
  const [categoryList] = useState<Category[]>([
    {
      key: "all",
      name: "전체",
    },
    {
      key: "korean",
      name: "한식",
    },
    {
      key: "chinese",
      name: "중식",
    },
    {
      key: "japanese",
      name: "일식/회",
    },
    {
      key: "pasta",
      name: "양식",
    },
    {
      key: "dduckbokki",
      name: "분식",
    },
    {
      key: "chicken",
      name: "치킨/고기",
    },
    {
      key: "pizza",
      name: "피자",
    },
    {
      key: "burger",
      name: "버거",
    },
    {
      key: "soup",
      name: "찜/탕",
    },
    {
      key: "doughnut",
      name: "카페/디저트",
    },
    {
      key: "salad",
      name: "샐러드",
    },
  ]);
  return categoryList;
};
