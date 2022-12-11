import { createContext } from "react";

export const themes = {
  light: {
    textColor: "#000000",
    cardBackgroundColor: "#ffffffa3",
    backgroundImage: null,
  },
  dark: {
    textColor: "#ffffff",
    cardBackgroundColor: "#0000005c",
    backgroundImage:
      "linear-gradient(rgb(8, 14, 44), rgb(8 14 44 / 86%), rgba(8, 14, 44, 0.8), rgba(8, 14, 44, 0.7), rgba(8, 14, 44, 0.3))",
  },
};

const ThemeContext = createContext(themes.light);
export default ThemeContext;
