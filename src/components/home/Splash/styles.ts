import { fadeOut, flexColumnCreator, styled } from "@styles";

export const fadeOutPlayTime = 300;

const SplashContainerVariants = styled("div", {
  defaultVariants: {
    animation: "none",
  },
  variants: {
    animation: {
      fadeOut: {
        animation: `${fadeOut} ${fadeOutPlayTime}ms ease-out`,
      },
      none: {},
    },
  },
});

export const SplashContainer = styled(SplashContainerVariants, {
  backgroundColor: "$main01",
  display: "flex",
  flexDirection: "column",
  gap: "$10",
  height: "100vh",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 9999,
});

export const SplashImageContainer = styled("div", {
  bottom: 0,
  height: "60vh",
  maxHeight: "60%",
  maxWidth: "100%",
  position: "absolute",
  width: "100vw",
});

export const TitleImageContainer = styled("div", {
  ...flexColumnCreator("center", "center"),
  gap: "$14",
  left: "50%",
  position: "absolute",
  top: "30%",
  transform: "translateX(-50%)",
});
