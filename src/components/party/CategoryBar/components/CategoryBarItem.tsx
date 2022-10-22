import { memo, useEffect, useMemo, useRef } from "react";

import Link from "next/link";

import { flexColumnCreator, styled } from "@styles";
import { CategoryKey, CategoryName } from "@types";

const CategoryBarItemContainer = styled("li", {
  ...flexColumnCreator("center", "center"),
  position: "relative",
});

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

const ActiveUnderBar = styled("div", {
  bottom: 4,
  position: "absolute",
  transition: "all 0.3s ease-in-out",
  variants: {
    active: {
      false: {
        backgroundColor: "$gray01",
        height: "$1",
      },
      true: {
        backgroundColor: "$main01",
        borderRadius: "0.3rem",
        bottom: 2,
        height: "0.5rem",
      },
    },
  },
  width: "100%",
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
  const categoryBarItemRef = useRef<HTMLLIElement>(null);
  const isActive = useMemo(() => {
    return activePath === path;
  }, [activePath, path]);

  useEffect(() => {
    if (isActive) categoryBarItemRef.current?.scrollIntoView();
  }, [isActive]);

  return (
    <CategoryBarItemContainer ref={categoryBarItemRef}>
      <Link passHref replace href={`/party/${path}`}>
        <CategoryNameLink active={isActive}>{name}</CategoryNameLink>
      </Link>
      <ActiveUnderBar active={isActive} />
    </CategoryBarItemContainer>
  );
}

export const MemoCategoryBarItem = memo(CategoryBarItem);
