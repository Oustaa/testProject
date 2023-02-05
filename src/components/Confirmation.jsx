import React, { useRef } from "react";

import { Transition } from "react-transition-group";
import styled from "styled-components";
import {
  StyledSectionTitle,
  StyledSection,
  StyledSectionDiscription,
  ButtonPrimary,
} from "../styles";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    width: 50%;
    margin-block: var(--spacing-sl);
    padding: var(--spacing-sl);
    font-size: 1.4rem;

    @media (max-width: 670px) {
      width: 100%;
    }
  }

  p {
    margin-block: var(--spacing-xl) var(--spacing-xxl);
    span {
      color: var(--primary-color);
      font-weight: bold;
    }
  }
`;

const transitionStyles = {
  entering: { transform: "translateY(-10%);", opacity: 0 },
  entered: { transform: "translateY(0%)", opacity: 1 },
  exiting: { transform: "translateY(0%)", opacity: 1 },
  exited: { transform: "translateY(-10%);", opacity: 0 },
};

const Confirmation = ({ sectionIndex }) => {
  const emailRef = useRef();
  const nodeRef = useRef(null);

  const SubmitHundler = (e) => {
    e.preventDefault();
    alert(`The entred email is ${emailRef.current.value}`);
  };
  console.log(sectionIndex);
  return (
    <Transition
      in={sectionIndex === 5}
      nodeRef={nodeRef}
      timeout={400}
      unmountOnExit={true}
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...transitionStyles[state],
          }}
        >
          <StyledSection>
            <header>
              <StyledSectionTitle>Confirm Submission.</StyledSectionTitle>
              <StyledSectionDiscription>
                Thanks for taking the time to complete this form.
              </StyledSectionDiscription>
              <StyledSectionDiscription>
                Please send us your email to get in touch with us.
              </StyledSectionDiscription>
            </header>

            <StyledForm onSubmit={SubmitHundler}>
              <label htmlFor="email">What's your best contact email?</label>
              <input ref={emailRef} type="email" name="email" id="email" />
              <p>
                By submitting, you are agreeing to our&nbsp;
                <span>
                  <a href="/">Terms</a>
                </span>
                &nbsp;and&nbsp;
                <span>
                  <a href="/">Privacy Policy</a>
                </span>
                .
              </p>
              <ButtonPrimary type="submit">Complete Submission</ButtonPrimary>
            </StyledForm>
          </StyledSection>
        </div>
      )}
    </Transition>
  );
};

export default Confirmation;
