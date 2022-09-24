import { useMemo } from "react";

import { Input } from "../styles";

import { InputWithIcon } from "./interfaces";
import { InputIconContainer, InputWithIconContainer } from "./styles";

export function InputWithIcon({
  LeftIcon,
  RightIcon,
  leftIconOnClick,
  rightIconOnClick,
  ...rest
}: InputWithIcon) {
  const iconPosition = useMemo(() => {
    if (LeftIcon && RightIcon) return "both";
    if (LeftIcon) return "left";
    if (RightIcon) return "right";
  }, [LeftIcon, RightIcon]);

  return (
    <InputWithIconContainer>
      {LeftIcon ? (
        <InputIconContainer position="left" onClick={leftIconOnClick}>
          <LeftIcon />
        </InputIconContainer>
      ) : null}
      <Input withIcon={iconPosition} {...rest} />
      {RightIcon ? (
        <InputIconContainer position="right" onClick={rightIconOnClick}>
          <RightIcon />
        </InputIconContainer>
      ) : null}
    </InputWithIconContainer>
  );
}
