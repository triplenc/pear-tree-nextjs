import { styled } from "@styles";

const typographyVariants = styled("p", {
  defaultVariants: {
    color: "black",
    type: "caption",
  },
  variants: {
    color: {
      black: { color: "$black" },
      error: { color: "$error" },
      gray01: { color: "$gray01" },
      gray02: { color: "$gray02" },
      gray03: { color: "$gray03" },
      gray04: { color: "$gray04" },
      main01: { color: "$main01" },
      main02: { color: "$main02" },
      main03: { color: "$main03" },
      main04: { color: "$main04" },
      main05: { color: "$main05" },
      main06: { color: "$main06" },
      white: { color: "$white" },
    },
    type: {
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
    },
  },
});

/** semantic을 위해 가급적 사용을 지양해주세요.*/
export const TypographyStyle = styled(typographyVariants, {
  boxSizing: "border-box",
  lineHeight: "130%",
  m: "0",
  p: "0",
});
