import { styled } from "@stitches";

export const Input = styled("input", {
  m: 0,
  p: "$15 $18",
  borderWidth: "0.08rem",
  borderStyle: "solid",
  borderRadius: "$10",
  "&:focus": {
    outline: 0,
    borderColor: "$main01",
  },
  "&:placeholder": {
    color: "$gray01",
  },
  fontSize: "$14",
  variants: {
    type: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
      fit: {
        width: "fit-content",
      },
    },
    color: {
      gray: {
        transition: "all 0.3s linear",
        borderColor: "$gray01",
      },
      error: {
        borderColor: "$error !important",
      },
      primary: {
        transition: "all 0.3s linear",
        borderColor: "$main01",
      },
    },
    fatBorder: {
      true: {
        borderWidth: "0.2rem",
      },
    },
  },
  defaultVariants: {
    type: "full",
    color: "gray",
    fatBorder: false,
  },
});
