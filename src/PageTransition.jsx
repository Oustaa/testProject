import React, { useRef } from "react";

import { Transition } from "react-transition-group";

const duration = 180;

const defaultStyle = {
  position: "absolute",
  width: "calc(100% - 2rem)",
  maxWidth: "inherit",
  transition: `all ${duration}ms ease-out`,
};

const transitionStyles = {
  entering: { transform: "translateY(-5%)", opacity: 0 },
  entered: { transform: "translateY(0%)", opacity: 1 },
  exiting: { transform: "translateY(-5%)", opacity: 1 },
  exited: { transform: "translateY(0%)", opacity: 0 },
};

const PageTransition = ({ sectionIndex, currentSectionIndex, children }) => {
  const nodeRef = useRef();

  return (
    <Transition
      in={sectionIndex === currentSectionIndex}
      nodeRef={nodeRef}
      timeout={duration}
      unmountOnExit={true}
      appear={true}
    >
      {(state) => {
        console.log(state);
        return (
          <div
            ref={nodeRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

export default PageTransition;
