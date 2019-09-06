import * as React from "react";
import styled from "styled-components";
import ThemeWrapper from "../helpers/ThemeWrapper";
import { useTransition, useSpring, animated } from "react-spring";

// context
import { NavThemeContext, LanguageContext } from "../../context/contexts";

export interface LanguagePickerProps {}

const Wrapper = styled.div`
  text-align: center;
  width: 10vw;
`;

const Languages = {
  en: "English",
  de: "Deutsch",
  nl: "Nederlands"
};

const LanguagePicker: React.SFC<LanguagePickerProps> = () => {
  const detectOutsideClick = e => {
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
  };

  const ref = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("click", detectOutsideClick, true);
    return () => {
      document.removeEventListener("click", detectOutsideClick, true);
    };
  }, []);

  const [show, setShow] = React.useState(false);
  const Language = React.useContext(LanguageContext);
  const Theme = React.useContext(NavThemeContext);

  const transitions = useTransition(show, null, {
    from: { transform: "rotateX(90deg)" },
    enter: { transform: "rotateX(0deg)" },
    leave: { transform: "rotateX(-90deg)" }
  });

  const backgroundSpring = useSpring({
    backgroundColor: Theme.backgroundColor
  });

  const colorSpring = useSpring({ color: Theme.color });

  const toggle = () => {
    setShow(!show);
  };

  const changeLang = e => {
    e.preventDefault();
    Language.update(e.target.id);
    toggle();
  };

  return (
    <Wrapper ref={ref}>
      <animated.button
        onClick={toggle}
        style={{
          ...colorSpring,
          backgroundColor: "transparent",
          border: "none",
          fontWeight: "bold"
        }}
      >
        {Languages[Language.current]}
      </animated.button>
      {transitions.map(transitionProps => {
        return (
          transitionProps.item && (
            <animated.div
              key={transitionProps.key}
              style={transitionProps.props}
            >
              <animated.div
                style={{
                  ...backgroundSpring,
                  position: "absolute",
                  width: "10vw",
                  textAlign: "center",
                  marginTop: "3vh",
                  borderRadius: "0 0 5px 5px",
                  borderTop: "none"
                }}
              >
                {Object.keys(Languages).map(lang => {
                  if (lang !== Language.current) {
                    return (
                      <animated.button
                        onClick={changeLang}
                        id={lang}
                        style={{
                          ...colorSpring,
                          padding: "0.5em",
                          backgroundColor: "transparent",
                          border: "none",
                          fontWeight: "bold"
                        }}
                      >
                        {Languages[lang]}
                      </animated.button>
                    );
                  }
                })}
              </animated.div>
            </animated.div>
          )
        );
      })}
    </Wrapper>
  );
};

export default LanguagePicker;
