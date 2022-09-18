import { ElementType, InputHTMLAttributes } from "react";

import { VariantProps } from "@stitches/react";

import { inputVariants } from "../styles";

export type InputProps = VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement>;

export interface InputWithIcon extends InputProps {
  LeftIcon?: ElementType;
  RightIcon?: ElementType;
  leftIconOnClick?: VoidFunction;
  rightIconOnClick?: VoidFunction;
}
