import { flexColumnCreator, styled } from "@styles";

import { BOTTOM_NAVIGATION_HEIGHT } from "./BottomNavigation/styles";
import { LOCATION_SEARCH_HEADER_HEIGHT } from "./LocationSearchHeader/styles";

export const LayoutContainerVariants = styled("div", {
  defaultVariants: {
    backgroundColor: "$white",
    headerType: "navigation",
    isShowBottomNavigation: true,
  },
  variants: {
    backgroundColor: {
      white: {
        backgroundColor: "$white",
      },
    },
    headerType: {
      locationSearch: {
        paddingTop: LOCATION_SEARCH_HEADER_HEIGHT,
      },
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
});
