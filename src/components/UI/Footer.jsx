import React from "react";

import styled from "styled-components";
import { Container } from "../../styles";
import { ButtonPrimary, ButtonSecondary } from "../../styles";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--white);
  width: inherit;
  max-width: inherit;
  position: fixed;
  bottom: 0;

  padding-bottom: var(--spacing-xl);
`;

const Footer = ({ nextSection, prevSection, sectionIndex }) => {
  return (
    <Container>
      <StyledFooter>
        <ButtonSecondary onClick={prevSection}>Previous</ButtonSecondary>
        {sectionIndex !== 5 && (
          <ButtonPrimary onClick={nextSection}>Next Step</ButtonPrimary>
        )}
      </StyledFooter>
    </Container>
  );
};

export default Footer;
