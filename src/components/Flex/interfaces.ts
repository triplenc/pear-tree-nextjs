import { ReactNode } from "react";

export interface FlexProps {
  children: ReactNode;
  direction?: string;
  justify?: string;
  align?: string;
  gap?: number;
  padding?: string;
  margin?: string;
}
