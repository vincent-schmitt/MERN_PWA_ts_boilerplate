import * as React from "react";

import { DarkNav } from "../Theme/custom/Nav";

export const NavThemeContext = React.createContext({
  Theme: DarkNav,
  toggle: () => {}
});
