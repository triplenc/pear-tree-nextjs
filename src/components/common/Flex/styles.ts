import { styled } from "@styles";

const flexVariants = {
  defaultVariants: {
    align: "stretch",
    direction: "row",
    justify: "start",
    wrap: "noWrap",
  },
  variants: {
    align: {
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      start: {
        alignItems: "flex-start",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    justify: {
      around: {
        justifyContent: "space-around",
      },
      between: {
        justifyContent: "space-between",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      start: {
        justifyContent: "flex-start",
      },
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap",
      },
      wrap: {
        flexWrap: "wrap",
      },
    },
  },
};

export const Flex = styled("div", {
  display: "flex",
  m: "0",
  p: "0",
  ...flexVariants,
});
