import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // state
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      background: "white",
      color: "black",
      fontFamily: "Lucida Console",
      boxShadow: "1px 3px 23px -6px rgba(0,0,0,0.87)",
    },
    dark: {
      background: "#130f40",
      color: "white",
      fontFamily: "Lucida Console",
      boxShadow: "1px 3px 23px -6px rgba(0,0,0,0.87)",
    },
  });
  //fn toogle mode
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  //  return provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
