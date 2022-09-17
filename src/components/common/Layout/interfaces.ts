import { ReactNode } from "react";

import { VariantProps } from "@stitches/react";

import { LayoutContainerVariants } from "./styles";

type LayoutVariants = VariantProps<typeof LayoutContainerVariants>;

export interface LayoutProps {
  backgroundColor?: LayoutVariants["backgroundColor"];
  children: ReactNode;
  headerType?: LayoutVariants["headerType"];
  isShowBottomNavigation?: LayoutVariants["isShowBottomNavigation"];
}
