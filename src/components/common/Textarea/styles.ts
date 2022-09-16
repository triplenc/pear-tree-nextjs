import { styled } from "@styles";

const textareaVariants = styled("textarea", {
  defaultVariants: {
    color: "white",
    size: "tall",
  },
  variants: {
    color: {
      gray: {
        backgroundColor: "$gray03",
        padding: "$16 $12",
      },
      white: {
        borderRadius: "$15",
        boxShadow: "0rem 0rem 4rem rgba(0, 0, 0, 0.25)",
        padding: "$16",
      },
    },
    size: {
      short: {
        height: "13rem",
      },
      tall: {
        height: "19.5rem",
      },
    },
  },
});

export const TextareaStyle = styled(textareaVariants, {
  "&:focus": {
    outline: 0,
  },
  border: 0,
  borderRadius: "$10",
  fontSize: "$14",
  fontWeight: "$regular",
  resize: "none",
  width: "100%",
});
