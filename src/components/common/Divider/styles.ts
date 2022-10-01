import { styled } from "@styles";

export const Divider = styled("div", {
  backgroundColor: "$gray03",
  defaultVariants: {
    height: "1",
  },
  variants: {
    height: {
      "1": {
        height: "$1",
      },
      "6": {
        height: "$6",
      },
    },
  },
  width: "100%",
});
