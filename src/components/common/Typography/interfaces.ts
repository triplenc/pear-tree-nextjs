import { ReactNode } from "react";

import { colors } from "@components/stitches.config";

export interface TypographyProps {
  children: ReactNode;
  color?: keyof typeof colors;
}
