import { styled } from "@stitches";

const buttonVariants = {
  defaultVariants: {
    height: "normal",
    size: "large",
    type: "primary",
  },
  variants: {
    height: {
      normal: {},
      tall: {
        p: "$16",
      },
    },
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
    type: {
      gray: {
        "&:active": {
          backgroundColor: "$gray02",
          borderColor: "$gray02",
        },
        "&:disabled": {
          backgroundColor: "$gray02",
          borderColor: "$gray02",
        },
        backgroundColor: "$gray01",
        borderColor: "$gray01",
        color: "$white",
      },
      outlineGray: {
        "&:active": {
          borderColor: "$gray02",
          color: "$gray02",
        },
        "&:disabled": {
          borderColor: "$gray02",
          color: "$gray02",
        },
        backgroundColor: "$white",
        borderColor: "$gray01",
        color: "$gray01",
      },
      outlinePrimary: {
        "&:active": {
          borderColor: "$main02",
          color: "$main02",
        },
        "&:disabled": {
          borderColor: "$main02",
          color: "$main02",
        },
        backgroundColor: "$white",
        borderColor: "$main01",
        color: "$main01",
      },
      primary: {
        "&:active": {
          backgroundColor: "$main02",
          borderColor: "$main02",
        },
        "&:disabled": {
          backgroundColor: "$main02",
          borderColor: "$main02",
        },
        backgroundColor: "$main01",
        borderColor: "$main01",
        color: "$white",
      },
    },
  },
};

export const Button = styled("button", {
  alignItems: "center",
  borderRadius: "$10",
  borderStyle: "solid",
  borderWidth: "0.1rem",
  display: "flex",
  justifyContent: "center",
  p: "$10",
  ...buttonVariants,
});
