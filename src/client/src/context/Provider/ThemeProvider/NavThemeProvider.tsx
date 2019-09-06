import * as React from "react";

// context
import { NavThemeContext } from "../../contexts";

// Themes
import { DarkNav, LightNav } from "../../../Theme/custom/Nav";

export interface NavThemeProviderProps {}

interface ThemeI {
  [key: string]: string | number;
}

interface ThemesI {
  0: ThemeI;
  1: ThemeI;
}

const Themes: ThemesI = {
  0: DarkNav,
  1: LightNav
};

const NavThemeProvider: React.SFC<NavThemeProviderProps> = ({ children }) => {
  const [current, setCurrent] = React.useState(0);

  const toggle = () => {
    if (current === 0) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <NavThemeContext.Provider
      value={{ Theme: Themes[current], toggle: toggle }}
    >
      {children}
    </NavThemeContext.Provider>
  );
};

export default NavThemeProvider;
