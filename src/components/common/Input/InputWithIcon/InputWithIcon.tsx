import { useMemo } from "react";

import { Input } from "../styles";

import { InputWithIconProps } from "./interfaces";
import { InputIconContainer, InputWithIconContainer } from "./styles";

export function InputWithIcon({
  LeftIcon,
  RightIcon,
  leftIconOnClick,
  rightIconOnClick,
  ...rest
}: InputWithIconProps) {
  const iconPosition = useMemo(() => {
    if (LeftIcon && RightIcon) return "both";
    if (LeftIcon) return "left";
    if (RightIcon) return "right";
  }, [LeftIcon, RightIcon]);

  return (
    <InputWithIconContainer>
      {LeftIcon ? (
        <InputIconContainer
          aria-label={LeftIcon.name}
          position="left"
          onClick={leftIconOnClick}>
          <LeftIcon.icon />
        </InputIconContainer>
      ) : null}
      <Input withIcon={iconPosition} {...rest} />
      {RightIcon ? (
        <InputIconContainer
          aria-label={RightIcon.name}
          position="right"
          onClick={rightIconOnClick}>
          <RightIcon.icon />
        </InputIconContainer>
      ) : null}
    </InputWithIconContainer>
  );
}
