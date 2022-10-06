import { flexColumnCreator, styled } from "@styles";

export const NAVIGATION_HEADER_HEIGHT = "4.8rem";

export const NavigationHeaderContainer = styled("div", {
  ...flexColumnCreator("center", "center", "1.6rem"),
  backgroundColor: "$white",
  height: NAVIGATION_HEADER_HEIGHT,
  p: "$10 $24 $12 $24",
  position: "relative",
  variants: {
    bottomBorder: {
      false: {},
      true: {
        border: 0,
        borderBottomWidth: "$1",
        borderColor: "$gray02",
        borderStyle: "solid",
      },
    },
  },

  width: "100%",
});

export const NavigationSideContainer = styled("div", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  variants: {
    position: {
      left: {
        left: "$20",
      },
      right: {
        right: "$20",
      },
    },
  },
});
