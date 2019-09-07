import * as React from "react";

// ThemeContexts

import { darkNav } from "../Theme/custom/Nav";
import { darkPage } from "../Theme/custom/Page";
import { LanguageT } from "../types/Language";

export const ToggleThemeContext = React.createContext({
  toggle: () => {},
  current: 0
});

export const NavThemeContext = React.createContext(darkNav);

export const PageThemeContext = React.createContext(darkPage);

// Language Context

export const LanguageContext = React.createContext({
  current: "en",
  update: (lang: LanguageT) => {}
});
