import { memo, useMemo } from "react";

import Link from "next/link";

import { styled } from "@styles";
import { CategoryKey, CategoryName } from "@types";

const CategoryNameLink = styled("a", {
  color: "$gray01",
  fontSize: "$16",
  fontWeight: "$regular",
  px: "$16",
  py: "$10",
  variants: {
    active: {
      true: {
        color: "$black",
        fontWeight: "$semiBold",
      },
    },
  },
  whiteSpace: "nowrap",
});

function CategoryBarItem({
  activePath,
  name,
  path,
}: {
  activePath: CategoryKey;
  name: CategoryName;
  path: CategoryKey;
}) {
  const isActive = useMemo(() => {
    return activePath === path;
  }, [activePath, path]);

  return (
    <Link passHref replace href={`/party/${path}`}>
      <CategoryNameLink active={isActive}>{name}</CategoryNameLink>
    </Link>
  );
}

export const MemoCategoryBarItem = memo(CategoryBarItem);
