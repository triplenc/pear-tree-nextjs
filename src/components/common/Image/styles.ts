import { styled } from "@stitches";

export const ImageStyle = styled("img", {
  width: "auto",
  height: "100%",
  position: "absolute",
  inset: 0,
});

export const ImageContainer = styled("div", {
  width: "100%",
  paddingTop: "100%",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "$gray02",
});
