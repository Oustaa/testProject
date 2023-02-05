import React from "react";

import { BsGeoFill } from "react-icons/bs";
import PageTransition from "../PageTransition";
import {
  StyledSectionTitle,
  StyledSectionDiscription,
  StyledSection,
  StyledAnswerCard,
  StyledGridContainer,
} from "../styles";

const Preferences = ({ sectionIndex }) => {
  return (
    <PageTransition sectionIndex={sectionIndex} currentSectionIndex={3}>
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
          <StyledAnswerCard gridStart={1}>
            <BsGeoFill />
            <h4>In Person</h4>
          </StyledAnswerCard>
          <StyledAnswerCard gridStart={2}>
            <BsGeoFill />
            <h4>Blended</h4>
          </StyledAnswerCard>
          <StyledAnswerCard gridStart={3}>
            <BsGeoFill />
            <h4>Online - On Demand</h4>
          </StyledAnswerCard>
          <StyledAnswerCard gridStart={4}>
            <BsGeoFill />
            <h4>Online - Schedueled</h4>
          </StyledAnswerCard>
        </StyledGridContainer>
      </StyledSection>
    </PageTransition>
  );
};

export default Preferences;
