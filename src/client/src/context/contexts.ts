import * as React from "react";

// ThemeContexts

import { darkNav } from "../Theme/custom/Nav";
import { darkPage } from "../Theme/custom/Page";

export const ToggleThemeContext = React.createContext(() => {});

export const NavThemeContext = React.createContext(darkNav);

export const PageThemeContext = React.createContext(darkPage);
