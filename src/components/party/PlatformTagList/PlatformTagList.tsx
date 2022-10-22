import { useState } from "react";

import { TagList } from "@components/common";
import { styled } from "@styles";

interface Platform {
  image: string;
  key: string;
  name: string;
}

const PLATFORM_LIST: Platform[] = [
  { image: "", key: "all", name: "전체" },
  { image: "/images/beamin.png", key: "beamin", name: "배달의 민족" },
  { image: "/images/yogiyo.png", key: "yogiyo", name: "요기요" },
  { image: "/images/coupang-eats.png", key: "coupangEats", name: "쿠팡이츠" },
];

const PlatformTagListContainer = styled("div", {
  pt: "$14",
  px: "$24",
});

export function PlatformTagList() {
  const [activeTag, setActiveTag] = useState(PLATFORM_LIST[0]);
  return (
    <PlatformTagListContainer>
      <TagList
        activeTagKey={activeTag.key}
        tagList={PLATFORM_LIST}
        onClickTag={setActiveTag}
      />
    </PlatformTagListContainer>
  );
}
