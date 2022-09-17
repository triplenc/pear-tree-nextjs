import { Box } from "@components/common";
import { styled } from "@styles";

export const InputWithIconContainer = styled(Box, {
  position: "relative",
  width: "100%",
});

export const InputIconContainer = styled("button", {
  position: "absolute",
  transform: "translateY(30%)",
  variants: {
    position: {
      left: {
        left: "$8",
      },
      right: {
        right: "$8",
      },
    },
  },
});
