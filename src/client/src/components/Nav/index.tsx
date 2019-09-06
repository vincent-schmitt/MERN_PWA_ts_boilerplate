import * as React from "react";
import styled from "styled-components";
import Switch from "react-switch";

import UseTheme from "../helpers/ThemeWrapper";

// context
import { ToggleThemeContext, NavThemeContext } from "../../context/contexts";

// styles

export interface NavProps {}

const Brand = styled.h1``;

const Label = styled.label`
  float: right;
`;

const Nav: React.SFC<NavProps> = () => {
  const Theme = React.useContext(NavThemeContext);
  const Toggle = React.useContext(ToggleThemeContext);
  const [checked, setChecked] = React.useState(false);

  const toggleTheme = () => {
    Toggle();
    setChecked(!checked);
  };
  return (
    <UseTheme Theme={Theme}>
      <header>
        <Brand>Vindao</Brand>
        <Label>
          <Switch
            onChange={toggleTheme}
            checked={checked}
            offColor={Theme.color}
            onColor={Theme.color}
            onHandleColor={Theme.backgroundColor}
            offHandleColor={Theme.backgroundColor}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </Label>
      </header>
    </UseTheme>
  );
};

export default Nav;
