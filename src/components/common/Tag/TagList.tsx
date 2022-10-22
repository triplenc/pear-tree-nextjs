import { useCallback } from "react";

import { VoidFunction } from "@types";

import { Tag, TagListContainer } from "./styles";

export function TagList<T extends { key: string; name: string }>({
  activeTagKey,
  onClickTag,
  tagList,
}: {
  activeTagKey: T["key"];
  onClickTag: VoidFunction<T>;
  tagList: T[];
}) {
  const onClickTagHandler = useCallback(
    (tag) => {
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
          role="button"
          onClick={onClickTagHandler}>
          {tag.name}
        </Tag>
      ))}
    </TagListContainer>
  );
}
