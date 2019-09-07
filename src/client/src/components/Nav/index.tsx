import * as React from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { NavLink } from "react-router-dom";

// helper components
import UseTheme from "../helpers/ThemeWrapper";

// utils
import { getImageUrl } from "../../utils/Images/cloudinary";

// context
import { ToggleThemeContext, NavThemeContext } from "../../context/contexts";

// subComponents
import LanguagePicker from "./LanguagePicker";

// assets
const Logo = getImageUrl("logo-new-03_krbj4b", 3);

// styles

export interface NavProps {}

const Header = styled.header`
  height: 100%;
  padding: 0 1em 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  height: 50%;
`;

const getChecked = (current: number) => {
  if (current === 0) {
    return false;
  }
  return true;
};

const Nav: React.SFC<NavProps> = () => {
  const Theme = React.useContext(NavThemeContext);
  const Toggle = React.useContext(ToggleThemeContext);
  const [checked, setChecked] = React.useState(getChecked(Toggle.current));

  const toggleTheme = () => {
    Toggle.toggle();
    setChecked(!checked);
  };
  return (
    <UseTheme Theme={Theme}>
      <Header>
        <Brand>
          <NavLink to="/">
            <img src={Logo} alt="Logo" height="100%" />
          </NavLink>
        </Brand>
        <div style={{ display: "flex" }}>
          <LanguagePicker />
          <Switch
            height={20}
            width={45}
            onChange={toggleTheme}
            checked={checked}
            offColor={Theme.color}
            onColor={Theme.color}
            onHandleColor={Theme.backgroundColor}
            offHandleColor={Theme.backgroundColor}
            uncheckedIcon={false}
            checkedIcon={false}
            aria-labelledby="switch between dark and light theme"
            aria-labels="switch"
          />
        </div>
      </Header>
    </UseTheme>
  );
};

export default Nav;
