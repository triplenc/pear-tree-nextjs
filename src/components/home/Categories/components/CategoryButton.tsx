import Image from "next/image";
import Link from "next/link";

import { Caption } from "@components/common";
import { flexColumnCreator, styled } from "@styles";

import { Category } from "../interfaces";

const CategoryLink = styled("a", {
  ...flexColumnCreator("center", "center", "$2"),
  height: "7.4rem",
  width: "20%",
});

export function CategoryButton({ image, name, path }: Category) {
  return (
    <Link passHref href={`/party/${path}`}>
      <CategoryLink>
        <Image alt={name} height={56} src={image} width={56} />
        <Caption>{name}</Caption>
      </CategoryLink>
    </Link>
  );
}
