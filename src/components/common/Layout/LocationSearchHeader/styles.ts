import { flexColumnCreator, styled } from "@styles";

export const LocationSearchHeaderContainer = styled("div", {
  ...flexColumnCreator("center", "center", "1.6rem"),
  backgroundColor: "$main01",
  height: "$locationSearchHeaderHeight",
  p: "$10 $24 $12 $24",
  width: "100%",
});
