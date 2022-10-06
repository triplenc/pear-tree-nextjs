import { memo } from "react";

import { useRouter } from "next/router";

import { H1 } from "@components/common/Typography";
import ArrowLeftIcon from "@icons/arrow-left.svg";

import { HeaderConfig } from "../interfaces";
import { LocationInfo } from "../LocationInfo";

import { NavigationHeaderContainer, NavigationSideContainer } from "./styles";

type HeaderComponentType = HeaderConfig["left"] & HeaderConfig["right"];

function LocationSearchHeader({
  headerConfig,
}: {
  headerConfig?: HeaderConfig;
}) {
  const router = useRouter();
  const onClickBackButton = () => {
    router.back();
  };

  const getHeaderSideComponent = (type: HeaderComponentType | unknown) => {
    switch (type) {
      case "back":
        return (
          <button aria-label="뒤로가기" onClick={onClickBackButton}>
            <ArrowLeftIcon />
          </button>
        );
      default:
        null;
    }
  };

  const getHeaderCenterComponent = (
    type: HeaderConfig["center"] = "locationInfo",
  ) => {
    switch (type) {
      case "locationInfo":
        return <LocationInfo color="black" />;
      case "title":
        return <H1>{headerConfig?.title}</H1>;
      default:
        null;
    }
  };

  return (
    <NavigationHeaderContainer
      bottomBorder={headerConfig?.bottomBorder ?? true}>
      <NavigationSideContainer position="left">
        {getHeaderSideComponent(headerConfig?.left ?? "back")}
      </NavigationSideContainer>
      {getHeaderCenterComponent(headerConfig?.center)}
      <NavigationSideContainer position="right">
        {getHeaderSideComponent(headerConfig?.right)}
      </NavigationSideContainer>
    </NavigationHeaderContainer>
  );
}

export const MemoNavigationHeader = memo(LocationSearchHeader);
