import * as React from "react";
import styled from "styled-components";

// context
import { NavThemeContext } from "../../context/contexts";

// styles
interface HeaderProps {
  Theme: { height: string; backgroundColor: string; color: string };
}

const Header = styled.header`
  height: ${(p: HeaderProps) => p.Theme.height};
  background-color: ${(p: HeaderProps) => p.Theme.backgroundColor};
  color: ${(p: HeaderProps) => p.Theme.color};
`;

export interface NavProps {}

const Brand = styled.h1``;

const ToggleThemeButton = styled.button`
  float: right;
`;

const Nav: React.SFC<NavProps> = () => {
  const Theme = React.useContext(NavThemeContext);

  const toggleTheme = () => {
    Theme.toggle();
  };
  return (
    <Header Theme={Theme.Theme}>
      <Brand>Vindao</Brand>
      <ToggleThemeButton onClick={toggleTheme}>Toggle Theme</ToggleThemeButton>
    </Header>
  );
};

export default Nav;
