import { flexCreator, styled } from "@styles";

import { useCategoryList } from "./hooks/useCategoryList";
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
      {categoryList.map(({ key, name }) => (
        <CategoryButton key={key} categoryKey={key} name={name} />
      ))}
    </CategoriesContainer>
  );
}
