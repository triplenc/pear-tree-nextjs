import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  lineHeight?: number | string;
}

export type SettledTypographyProps = Pick<
  TypographyProps,
  "children" | "color"
>;
