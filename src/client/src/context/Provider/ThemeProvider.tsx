import * as React from "react";

// types
import { ThemesI } from "../../types/Theme";

// context
import {
  ToggleThemeContext,
  NavThemeContext,
  PageThemeContext
} from "../contexts";

// Themes
import { darkNav, lightNav } from "../../Theme/custom/Nav";
import { darkPage, lightPage } from "../../Theme/custom/Page";

export interface NavThemeProviderProps {}

const navThemes: ThemesI = {
  0: darkNav,
  1: lightNav
};

const pageThemes: ThemesI = {
  0: darkPage,
  1: lightPage
};

const ThemeProvider: React.SFC<NavThemeProviderProps> = ({ children }) => {
  const getInitialTheme = () => {
    const now = new Date();
    if (now.getHours() > 17 || now.getHours() < 7) {
      return 0;
    } else {
      return 1;
    }
  };

  const [current, setCurrent] = React.useState(getInitialTheme());

  const toggle = () => {
    if (current === 0) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <ToggleThemeContext.Provider value={toggle}>
      <NavThemeContext.Provider value={navThemes[current]}>
        <PageThemeContext.Provider value={pageThemes[current]}>
          {children}
        </PageThemeContext.Provider>
      </NavThemeContext.Provider>
    </ToggleThemeContext.Provider>
  );
};

export default ThemeProvider;
