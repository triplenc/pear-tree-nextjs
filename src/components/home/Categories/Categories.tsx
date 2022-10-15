import { useCategoryList } from "@hooks";
import { flexCreator, styled } from "@styles";

import { CategoryButton } from "./components";

const CategoriesContainer = styled("div", {
  ...flexCreator("center"),
  flexWrap: "wrap",
  mb: "$16",
  mt: "$16",
  mx: "$24",
  rowGap: "$6",
});

export function Categories() {
  const categoryList = useCategoryList();
  return (
    <CategoriesContainer>
      {categoryList.map((category) => (
        <CategoryButton key={category.path} {...category} />
      ))}
    </CategoriesContainer>
  );
}
