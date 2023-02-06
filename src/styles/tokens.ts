/*
|-----------------------------------------------------------------------------
| Fonts
|-----------------------------------------------------------------------------
|
|
*/
export const fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem",
};

export const fontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};

export const fonts = {
  default: "Heebo, sans-serif",
  title: "Barlow, sans-serif",
  code: "monospace",
};

export const lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%",
};

/*
|-----------------------------------------------------------------------------
| Border-radius
|-----------------------------------------------------------------------------
|
|
*/
export const radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px",
};

export const rounded = {
  px: { borderRadius: "$px" },
  xs: { borderRadius: "$xs" },
  sm: { borderRadius: "$sm" },
  md: { borderRadius: "$md" },
  lg: { borderRadius: "$lg" },
  full: { borderRadius: "$full" },
};

/*
|-----------------------------------------------------------------------------
| Spaces
| - All commonly used spacing (padding, margins, etc...)
| - OBS: if yours is not here, add it, but remember that it must be a multiple of 4 and in REM.
|-----------------------------------------------------------------------------
|
|
*/

export const space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  30: "8rem",
  40: "10rem",
  64: "16rem",
  80: "20rem",
  84: "21rem",
  88: "22rem",
  92: "23rem",
  96: "24rem",
  100: "25rem",
  104: "26rem",
  108: "27rem",
  112: "28rem",
  116: "29rem",
  120: "30rem",
  280: "70rem",
};

/*
|-----------------------------------------------------------------------------
| Breakpoints
|-----------------------------------------------------------------------------
|
|
*/

export const media = {
  sm: "(max-width: 30em)", // 480px (small mobile)
  md: "(max-width: 48em)", // 768px (medium mobile)
  lg: "(max-width: 62em)", // 992px (large mobile)
  xl: "(max-width: 80em)", // 992px (notebook)
  "2xl": "(max-width: 96em)", // 1536px (desktop)
};

/*
|-----------------------------------------------------------------------------
| Colors
|-----------------------------------------------------------------------------
|
|
*/

export const colors = {
  blue: "#115D8C",
  blueLow: "#DDE9F0",

  orange: "#F25D27",
  orangeLow: "#FFA585",

  yellow: "#EFB866",

  title: "#123952",
  text: "#617480",
  subtext: "#A0ACB2",

  shape: "#FFFFFF",
  subShape: "#DCE2E5",
  background: "#F5F8FA",

  red: "#DE3838",

  green: "#51B853",
  greenLow: "#DCF5DD",
};
