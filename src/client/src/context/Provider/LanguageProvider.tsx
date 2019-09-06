import * as React from "react";

// context
import { LanguageContext } from "../contexts";

// types
import { LanguageT } from "../../types/Language";

export interface LanguageContextProviderProps {}

const LanguageContextProvider: React.SFC<LanguageContextProviderProps> = ({
  children
}) => {
  const [current, setCurrent] = React.useState("en");

  const update = (lang: LanguageT) => {
    setCurrent(lang);
  };
  return (
    <LanguageContext.Provider value={{ current: current, update: update }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
