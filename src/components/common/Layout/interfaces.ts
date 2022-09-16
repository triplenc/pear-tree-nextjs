import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  headerType?: "navigation" | "locationSearch";
  isShowBottomNavigation?: boolean;
}
