import { flexColumnCreator, styled } from "@styles";

export const CategoryBarContainer = styled("div", {
  "&::-webkit-scrollbar": {
    display: "none",
  },
  borderBottom: "$gray01 solid",
  borderBottomWidth: "$1",
  cursor: "pointer",
  display: "flex",
  overflowY: "scroll",
  overscrollBehavior: "contain",
  userSelect: "none",
});

const ActiveUnderBarContainer = styled("div", {
  ...flexColumnCreator("center", "center"),
  position: "relative",
});

const ActiveUnderBar = styled("div", {
  backgroundColor: "$main01",
  borderRadius: "0.3rem",
  height: "0.5rem",
  position: "absolute",
  transition: "0.3 ease-in-out",
  width: "6rem",
  zIndex: 5,
});
