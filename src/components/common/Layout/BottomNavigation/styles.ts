import { flexColumnCreator, flexCreator, styled } from "@styles";

export const BOTTOM_NAVIGATION_HEIGHT = "8rem";

export const BottomNavigationContainer = styled("nav", {
  ...flexCreator("center", "space-around"),
  backgroundColor: "$white",
  borderTopLeftRadius: "3rem",
  borderTopRightRadius: "3rem",
  bottom: 0,
  boxShadow: "0 -0.2rem 0.4rem rgba(0, 0, 0, 0.25)",
  height: BOTTOM_NAVIGATION_HEIGHT,
  left: "50%",
  maxWidth: "$mobileMax",
  position: "fixed",
  right: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  zIndex: 5,
});

export const BottomNavigationLink = styled("a", {
  ...flexColumnCreator("center", "center", "0.4rem"),
  defaultVariants: {
    active: false,
  },
  minWidth: "5rem",
  variants: {
    active: {
      false: {
        color: "$gray01",
      },
      true: {
        color: "$main01",
      },
    },
  },
});
