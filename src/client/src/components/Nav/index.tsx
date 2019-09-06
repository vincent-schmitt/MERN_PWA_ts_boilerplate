import * as React from "react";
import styled from "styled-components";

// styles
import { Header } from "../../Theme/custom/Nav";

export interface NavProps {}

const Brand = styled.h1``;

const Nav: React.SFC<NavProps> = () => {
  return <Header></Header>;
};

export default Nav;
