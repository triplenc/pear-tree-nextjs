import { styled } from "@stitches";

export const TypographyStyle = styled("p", {
  boxSizing: "border-box",
  m: "0",
  p: "0",
  lineHeight: "130%",
  defaultVariants: {
    type: "caption",
    color: "black",
  },
  variants: {
    type: {
      h1: {
        fontSize: "$21",
        fontWeight: "$semiBold",
      },
      h2: {
        fontSize: "$18",
        fontWeight: "$semiBold",
      },
      subtitle1: {
        fontSize: "$16",
        fontWeight: "$semiBold",
      },
      subtitle2: {
        fontSize: "$16",
        fontWeight: "$medium",
      },
      body1: {
        fontSize: "$14",
        fontWeight: "$regular",
      },
      body2: {
        fontSize: "$13",
        fontWeight: "$regular",
      },
      caption: {
        fontSize: "$12",
        fontWeight: "$regular",
      },
    },
    color: {
      main01: { color: "$main01" },
      main02: { color: "$main02" },
      main03: { color: "$main03" },
      main04: { color: "$main04" },
      main05: { color: "$main05" },
      main06: { color: "$main06" },
      gray01: { color: "$gray01" },
      gray02: { color: "$gray02" },
      gray03: { color: "$gray03" },
      gray04: { color: "$gray04" },
      black: { color: "$black" },
      white: { color: "$white" },
    },
  },
});
