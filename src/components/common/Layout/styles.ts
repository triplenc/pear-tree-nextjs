import { Box } from "@components/common";
import { flexColumnCreator, styled } from "@styles";

import { BOTTOM_NAVIGATION_HEIGHT } from "./BottomNavigation/styles";

const LayoutContainerVariants = styled(Box, {
  defaultVariants: {
    headerType: "navigation",
    isShowBottomNavigation: true,
  },
  variants: {
    headerType: {
      locationSearch: {},
      navigation: {},
    },
    isShowBottomNavigation: {
      false: {},
      true: {
        pb: BOTTOM_NAVIGATION_HEIGHT,
      },
    },
  },
});

export const LayoutContainer = styled(LayoutContainerVariants, {
  ...flexColumnCreator(),
  minHeight: "100vh",
  position: "relative",
  ...LayoutContainerVariants,
});
