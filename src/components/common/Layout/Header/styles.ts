import { styled } from "@styles";

export const HeaderContainer = styled("header", {
  left: "50%",
  maxWidth: "$mobileMax",
  position: "fixed",
  right: "50%",
  top: 0,
  transform: "translateX(-50%)",
  width: "100%",
  zIndex: 5,
});
