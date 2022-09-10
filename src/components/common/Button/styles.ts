import { styled } from "@stitches";

export const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "$10",
  borderRadius: "$10",
  borderWidth: "0.1rem",
  borderStyle: "solid",
  variants: {
    size: {
      large: {
        fontSize: "$16",
        width: "100%",
      },
      medium: {
        fontSize: "$14",
        width: "50%",
      },
      small: {
        fontSize: "$12",
        minWidth: "fit-content",
      },
    },
    height: {
      tall: {
        p: "$16",
      },
      normal: {},
    },
    type: {
      outlineGray: {
        backgroundColor: "$white",
        borderColor: "$gray01",
        color: "$gray01",
        "&:active": {
          borderColor: "$gray02",
          color: "$gray02",
        },
        "&:disabled": {
          borderColor: "$gray02",
          color: "$gray02",
        },
      },
      outlinePrimary: {
        backgroundColor: "$white",
        borderColor: "$main01",
        color: "$main01",
        "&:active": {
          borderColor: "$main02",
          color: "$main02",
        },
        "&:disabled": {
          borderColor: "$main02",
          color: "$main02",
        },
      },
      primary: {
        color: "$white",
        backgroundColor: "$main01",
        borderColor: "$main01",
        "&:active": {
          backgroundColor: "$main02",
          borderColor: "$main02",
        },
        "&:disabled": {
          backgroundColor: "$main02",
          borderColor: "$main02",
        },
      },
      gray: {
        color: "$white",
        backgroundColor: "$gray01",
        borderColor: "$gray01",
        "&:active": {
          backgroundColor: "$gray02",
          borderColor: "$gray02",
        },
        "&:disabled": {
          backgroundColor: "$gray02",
          borderColor: "$gray02",
        },
      },
    },
  },
  defaultVariants: {
    type: "primary",
    size: "large",
    height: "normal",
  },
});
