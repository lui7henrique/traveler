import { createGlobalStyle } from "styled-components";
import { globalCss } from ".";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth !important;
    font-family: 'Heebo', sans-serif;
  }
`;

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$black",
    color: "$gray300",
    overflowX: "hidden",
  },

  "body, input, textarea, button": {
    fontFamily: "$default",
    fontWeight: 500,
  },

  "h1, h2, h3, h4, h5, h6": {
    color: "$title",
    fontFamily: "$title",
    fontWeight: "$semibold",
  },

  a: {
    textDecoration: "none",
    color: "$text",
  },

  p: {
    color: "$text",
  },

  "body::-webkit-scrollbar": {
    width: "7px",
  },

  "body::-webkit-scrollbar-track": {
    background: "$zinc900",
  },

  "body::-webkit-scrollbar-thumb": {
    backgroundColor: "$zinc800",
    borderRadius: "0px",
  },

  "*:-webkit-autofill": {
    "-webkit-text-fill-color": "#617480",
  },
});
