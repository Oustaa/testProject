import React from "react";

import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { StyledAnswerCard, StyledGridContainer } from "../styles";

import {
  StyledSection,
  StyledSectionTitle,
  StyledSectionDiscription,
} from "../styles";

const CreditsCredentials = () => {
  return (
    <StyledSection>
      <header>
        <StyledSectionTitle>
          Are you looking for courses that are eligible for credit?
        </StyledSectionTitle>
        <StyledSectionDiscription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          itaque aperiam ut repellat obcaecati explicabo inventore asperiores
          veniam, tempora ex dolorum cumque, voluptatibus laboriosam iusto?
        </StyledSectionDiscription>
      </header>
      <StyledGridContainer>
        <StyledAnswerCard color={"var(--primary-color)"} gridStart={2} span={1}>
          <BsCheckCircleFill />
          <h4>Yes!</h4>
        </StyledAnswerCard>
        <StyledAnswerCard
          color={"var(--secondary-color)"}
          gridStart={3}
          span={1}
        >
          <BsXCircleFill />
          <h4>No!</h4>
        </StyledAnswerCard>
      </StyledGridContainer>
    </StyledSection>
  );
};

export default CreditsCredentials;
