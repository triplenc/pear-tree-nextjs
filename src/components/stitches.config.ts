/* eslint-disable sort-destructure-keys/sort-destructure-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
import { createStitches, PropertyValue } from "@stitches/react";

export const colors = {
  main01: "#37DCA5",
  main02: "#C3F3E3",
  main03: "#D5F6EB",
  main04: "#258968",
  main05: "#1C201F",
  main06: "#DEF7EF",

  gray01: "#9A9A9A",
  gray02: "#D3D3D3",
  gray03: "#F0F0F0",
  gray04: "#FCFCFC",

  error: "#E3242B",

  black: "#000000",
  white: "#ffffff",
};

export const fontSizes = {
  "12": "1.2rem",
  "13": "1.3rem",
  "14": "1.4rem",
  "16": "1.6rem",
  "18": "1.8rem",
  "21": "2.1rem",
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const space = {
  "2": "0.2rem",
  "4": "0.4rem",
  "6": "0.6rem",
  "8": "0.8rem",
  "10": "1rem",
  "12": "1.2rem",
  "14": "1.4rem",
  "15": "1.5rem",
  "16": "1.6rem",
  "18": "1.8rem",
  "20": "2rem",
  "24": "2.4rem",
  "26": "2.6rem",
  "28": "2.8rem",
  "30": "3rem",
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    space,
    sizes: space,
    radii: space,
  },
  utils: {
    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    ml: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mb: (value: PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pl: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    pb: (value: PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
