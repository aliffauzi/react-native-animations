import { createText, createBox } from "@shopify/restyle";

const theme = {
  colors: {
    white: "#fff",
    text: "#0D092370",
    button: "#0C0D34",
    primary: "#0D0923",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    title1: {
      fontSize: 80,
      fontFamily: "Rubik-Bold",
      color: "white",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "Rubik-Medium",
      color: "primary",
    },
    desc: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: "Rubik-Medium",
      color: "text",
    },
    nav: {
      fontSize: 15,
      fontFamily: "Rubik-Regular",
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
