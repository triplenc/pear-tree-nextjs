import { useCallback } from "react";

import { CSS } from "@stitches/react";
import { VoidFunction } from "@types";

import { Tag, TagListContainer } from "./styles";

export function TagList<T extends { key: string; name: string }>({
  activeTagKey,
  onClickTag,
  tagCss,
  tagList,
}: {
  activeTagKey: T["key"];
  onClickTag: VoidFunction<T>;
  tagCss?: CSS;
  tagList: T[];
}) {
  const onClickTagHandler = useCallback(
    (tag: T) => {
      onClickTag(tag);
    },
    [onClickTag],
  );

  return (
    <TagListContainer>
      {tagList.map((tag) => (
        <Tag
          key={tag.key}
          active={activeTagKey === tag.key}
          as="li"
          css={tagCss}
          onClick={() => onClickTagHandler(tag)}>
          {tag.name}
        </Tag>
      ))}
    </TagListContainer>
  );
}
