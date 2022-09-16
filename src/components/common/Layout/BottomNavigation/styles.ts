import { Box } from "@components/common";
import { flexCreator, styled } from "@styles";

export const BOTTOM_NAVIGATION_HEIGHT = "8rem";

export const BottomNavigationContainer = styled(Box, {
  ...flexCreator("center", "space-around"),
  backgroundColor: "$white",
  borderTopLeftRadius: "3rem",
  borderTopRightRadius: "3rem",
  bottom: 0,
  boxShadow: "0 -0.2rem 0.4rem rgba(0, 0, 0, 0.25)",
  height: BOTTOM_NAVIGATION_HEIGHT,
  left: 0,
  position: "fixed",
  right: 0,
  width: "100%",
});
