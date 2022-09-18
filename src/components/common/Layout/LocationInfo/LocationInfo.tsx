import { useCallback } from "react";

import { H2 } from "@components/common";
import ArrowDownIcon from "@icons/fill-arrow-down.svg";
import { theme } from "@styles";

import { LocationInfoContainer } from "./styles";

export function LocationInfo({ color }: { color: "white" | "black" }) {
  const address = "마포구 상수동";

  const onClickLocationConfig = useCallback(() => {
    console.info("on click location config");
  }, []);

  return (
    <LocationInfoContainer onClick={onClickLocationConfig}>
      <H2 color={color}>{address}</H2>
      <ArrowDownIcon fill={theme.colors[color]} />
    </LocationInfoContainer>
  );
}
