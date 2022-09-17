import { ElementType, InputHTMLAttributes, useMemo } from "react";

import { VariantProps } from "@stitches/react";

import { Input, inputVariants } from "../styles";

import { InputIconContainer, InputWithIconContainer } from "./styles";

type InputProps = VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement>;

interface InputWithIcon extends InputProps {
  LeftIcon?: ElementType;
  RightIcon?: ElementType;
  leftIconOnClick?: VoidFunction;
  rightIconOnClick?: VoidFunction;
}

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
