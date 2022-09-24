import { flexColumnCreator, styled } from "@styles";

export const LOCATION_SEARCH_HEADER_HEIGHT = "10rem";

export const LocationSearchHeaderContainer = styled("div", {
  ...flexColumnCreator("center", "center", "1.6rem"),
  backgroundColor: "$main01",
  height: "10rem",
  p: "$10 $24 $12 $24",
  width: "100%",
});
