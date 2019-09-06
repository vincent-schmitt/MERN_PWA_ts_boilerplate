import * as React from "react";

// styles
import { PageWrapper } from "../../Theme/custom/Page";

export interface PageProps {
  background?: string;
}

const Page: React.SFC<PageProps> = ({ children, background }) => {
  return (
    <PageWrapper style={{ backgroundImage: background }}>
      {children}
    </PageWrapper>
  );
};

export default Page;
