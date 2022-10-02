import { useCallback } from "react";

import { useUserLocation } from "src/hooks/useUserLocation";

import { H2 } from "@components/common";
import ArrowDownIcon from "@icons/fill-arrow-down.svg";
import { theme } from "@styles";

import { LocationInfoContainer } from "./styles";

export function LocationInfo({ color }: { color: "white" | "black" }) {
  const { userLocationAsString } = useUserLocation();

  const onClickLocationConfig = useCallback(() => {
    console.info("on click location config");
  }, []);

  return (
    <LocationInfoContainer onClick={onClickLocationConfig}>
      <H2 color={color}>{userLocationAsString}</H2>
      <ArrowDownIcon fill={theme.colors[color]} />
    </LocationInfoContainer>
  );
}
