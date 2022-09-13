import { ReactNode } from "react";

import { colors } from "@styles";

export interface TypographyProps {
  children: ReactNode;
  color?: keyof typeof colors;
}
