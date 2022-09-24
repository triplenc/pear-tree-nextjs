import { memo } from "react";

import { InputWithIcon } from "@components/common";
import SearchIcon from "@icons/search.svg";

import { LocationInfo } from "../LocationInfo";

import { LocationSearchHeaderContainer } from "./styles";

function LocationSearchHeader() {
  return (
    <LocationSearchHeaderContainer>
      <LocationInfo color="white" />
      <InputWithIcon
        LeftIcon={SearchIcon}
        placeholder="원하는 메뉴를 검색해봐요!"
      />
    </LocationSearchHeaderContainer>
  );
}

export const MemoLocationSearchHeader = memo(LocationSearchHeader);
