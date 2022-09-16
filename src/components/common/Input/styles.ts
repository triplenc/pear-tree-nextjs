import { styled } from "@styles";

const inputVariants = styled("input", {
  defaultVariants: {
    color: "gray",
    fatBorder: false,
    type: "full",
  },
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

/**
 * @fatBorder {boolean} border-width: 0.2rem;
 * @color {string} border-color: error | gray | primary;
 * @type {string} width: fit | full | half;
 */
export const Input = styled(inputVariants, {
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
  fontSize: "$14",
  m: 0,
  p: "$15 $18",
});
