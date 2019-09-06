import * as React from "react";
import { useSpring, animated } from "react-spring";
import { ThemeI } from "../../types/Theme";

export interface ThemeWrapperProps {
  Theme: ThemeI;
}

const ThemeWrapper: React.SFC<ThemeWrapperProps> = ({ Theme, children }) => {
  const spring = useSpring(Theme);
  return <animated.div style={spring}>{children}</animated.div>;
};

export default ThemeWrapper;
