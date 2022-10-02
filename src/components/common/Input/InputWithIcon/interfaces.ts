import { ElementType, InputHTMLAttributes } from "react";

import { VariantProps } from "@stitches/react";

import { inputVariants } from "../styles";

export type InputProps = VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement>;

interface Icon {
  icon: ElementType;
  name: string;
}
export interface InputWithIconProps extends InputProps {
  LeftIcon?: Icon;
  RightIcon?: Icon;
  leftIconOnClick?: VoidFunction;
  rightIconOnClick?: VoidFunction;
}
