import * as React from "react";

import ThemeWrapper from "../helpers/ThemeWrapper";

// Theme
import { PageThemeContext } from "../../context/contexts";

export interface PageProps {
  background?: string;
}

const Page: React.SFC<PageProps> = ({ children, background }) => {
  const Theme = React.useContext(PageThemeContext);

  return (
    <ThemeWrapper Theme={Theme}>
      <main style={{ backgroundImage: background }}>{children}</main>
    </ThemeWrapper>
  );
};

export default Page;
