import { Box } from "@components/common";
import { styled } from "@styles";

export const SplashContainer = styled(Box, {
  backgroundColor: "$main01",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  height: "100vh",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
});

export const SplashImageContainer = styled(Box, {
  bottom: 0,
  maxHeight: "60%",
  maxWidth: "100%",
  position: "absolute",
  width: "100vw",
});

export const TitleImageContainer = styled(Box, {
  left: "50%",
  position: "absolute",
  top: "30%",
  transform: "translateX(-50%)",
});
