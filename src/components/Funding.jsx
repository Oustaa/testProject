import React from "react";

import {
  StyledSectionTitle,
  StyledSection,
  StyledAnswerCard,
  StyledGridContainer,
  StyledSectionDiscription,
} from "../styles";

const Funding = () => {
  return (
    <StyledSection>
      <header>
        <StyledSectionTitle>
          How do you plan to fund your education?
        </StyledSectionTitle>
        <StyledSectionDiscription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At possimus
          dolorem ullam asperiores repudiandae, adipisci fugiat, amet cupiditate
          repellendus nesciunt ipsa? Hic ipsa odit minus fugit repudiandae
          blanditiis quam! Tempore sequi eum enim dolore consectetur?
        </StyledSectionDiscription>
      </header>
      <StyledGridContainer>
        <StyledAnswerCard
          spacingTop={true}
          color={"var(--primary-color)"}
          gridStart={1}
        >
          <h4>Military, Veteran or DOD eligible</h4>
        </StyledAnswerCard>
        <StyledAnswerCard
          spacingTop={true}
          color={"var(--primary-color)"}
          gridStart={2}
        >
          <h4>Workforce innovation and Opportunity Act (WIOR)</h4>
        </StyledAnswerCard>
        <StyledAnswerCard
          spacingTop={true}
          color={"var(--primary-color)"}
          gridStart={3}
        >
          <h4>Employer funded training</h4>
        </StyledAnswerCard>
        <StyledAnswerCard
          spacingTop={true}
          color={"var(--secondary-color)"}
          gridStart={4}
        >
          <h4>I will be using my personal funds</h4>
        </StyledAnswerCard>
      </StyledGridContainer>
    </StyledSection>
  );
};

export default Funding;
