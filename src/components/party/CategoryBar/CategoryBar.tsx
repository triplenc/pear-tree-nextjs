import { useRouter } from "next/router";

import { useCategoryList } from "@hooks";
import { CategoryKey } from "@types";

import { MemoCategoryBarItem } from "./components";
import { CategoryBarContainer } from "./styles";

export function CategoryBar() {
  const categoryList = useCategoryList();
  const router = useRouter();

  return (
    <CategoryBarContainer>
      {categoryList.map((category) => (
        <MemoCategoryBarItem
          key={category.path}
          activePath={router.query.category as CategoryKey}
          name={category.name}
          path={category.path}
        />
      ))}
    </CategoryBarContainer>
  );
}
