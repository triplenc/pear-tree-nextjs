import { flexColumnCreator, styled } from "@styles";

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
        paddingTop: "$locationSearchHeaderHeight",
      },
      navigation: {
        paddingTop: "$navigationHeaderHeight",
      },
    },
    isShowBottomNavigation: {
      false: {},
      true: {
        pb: "$bottomNavigationHeight",
      },
    },
  },
});

export const LayoutContainer = styled(LayoutContainerVariants, {
  ...flexColumnCreator(),
  minHeight: "100vh",
  position: "relative",
});
