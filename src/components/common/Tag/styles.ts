import { flexCreator, styled } from "@styles";

const TagVariants = styled("div", {
  defaultVariants: {
    active: false,
  },
  variants: {
    active: {
      false: {
        backgroundColor: "$gray03",
        color: "$gray01",
      },
      true: {
        backgroundColor: "$main01",
        color: "$white",
      },
    },
  },
});

export const Tag = styled(TagVariants, {
  ...flexCreator("center", "center"),
  borderRadius: "5rem",
  cursor: "pointer",
  fontSize: "$14",
  fontWeight: "$medium",
  p: "$8 $12",
  userSelect: "none",
});

export const TagListContainer = styled("ul", {
  ...flexCreator("center", null, "$8"),
});
