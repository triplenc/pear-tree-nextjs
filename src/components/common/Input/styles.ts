import { styled } from "@stitches";

export const Input = styled("input", {
  "&:focus": {
    borderColor: "$main01",
    outline: 0,
  },
  "&:placeholder": {
    color: "$gray01",
  },
  borderRadius: "$10",
  borderStyle: "solid",
  borderWidth: "0.08rem",
  defaultVariants: {
    color: "gray",
    fatBorder: false,
    type: "full",
  },
  fontSize: "$14",
  m: 0,
  p: "$15 $18",
  variants: {
    color: {
      error: {
        borderColor: "$error !important",
      },
      gray: {
        borderColor: "$gray01",
        transition: "all 0.3s linear",
      },
      primary: {
        borderColor: "$main01",
        transition: "all 0.3s linear",
      },
    },
    fatBorder: {
      true: {
        borderWidth: "0.2rem",
      },
    },
    type: {
      fit: {
        width: "fit-content",
      },
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
    },
  },
});
