import baseStyled, { ThemedStyledInterface } from "styled-components";

const breakpoints = {
  desktop: "720px",
};

export const theme = {
  breakpoints,
  media: {
    desktop: breakpoints.desktop,
  },
  colors: {
    primary: {
      blue: "hsl(246, 80%, 60%)",
      lightRedWork: "hsl(15, 100%, 70%)",
      softBlue: "hsl(195, 74%, 62%)",
      lightRedStudy: "hsl(348, 100%, 68%)",
      limeGreen: "hsl(145, 58%, 55%)",
      violet: "hsl(264, 64%, 52%)",
      softOrange: "hsl(43, 84%, 65%)",
    },
    neutral: {
      veryDarkBlue: "hsl(226, 43%, 10%)",
      darkBlue: "hsl(235, 46%, 20%)",
      desaturatedBlue: "hsl(235, 45%, 61%)",
      paleBlue: "hsl(236, 100%, 87%)",
    },
  },
  typography: {
    fontSize: "18px",
    family: "Rubik",
    weights: {
      sm: 300,
      md: 400,
      lg: 500,
    },
  },
};

export type ITheme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<ITheme>;
