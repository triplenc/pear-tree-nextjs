import { styled } from "@styles";

export const CategoryBarContainer = styled("ul", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  cursor: "pointer",
  display: "flex",
  height: "5rem",
  overflowY: "scroll",
  overscrollBehavior: "contain",
  userSelect: "none",
});
