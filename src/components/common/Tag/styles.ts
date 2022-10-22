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
  fontSize: "$14",
  fontWeight: "$medium",
  height: "$34",
  minWidth: "4.9rem",
});

export const TagListContainer = styled("ul", {
  ...flexCreator("center", "center", "$8"),
});
