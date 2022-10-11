import { ReactNode } from "react";

import { VariantProps } from "@stitches/react";

import { LayoutContainerVariants } from "./styles";

type LayoutVariants = VariantProps<typeof LayoutContainerVariants>;

export interface HeaderConfig {
  bottomBorder?: boolean;
  center?: "locationInfo" | "title";
  left?: "back";
  right?: unknown;
  title?: string;
}

export interface LayoutProps {
  backgroundColor?: LayoutVariants["backgroundColor"];
  children: ReactNode;
  headerConfig?: HeaderConfig;
  headerType?: LayoutVariants["headerType"];
  isShowBottomNavigation?: LayoutVariants["isShowBottomNavigation"];
}
