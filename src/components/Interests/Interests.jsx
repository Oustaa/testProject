import React from "react";

import InterestsItem from "./InterestsItem";

import styled from "styled-components";
import { StyledSectionTitle, StyledSection } from "../../styles";

const InterestsCategories = [
  "Business",
  "Sport",
  "Finance",
  "Management",
  "Computer",
  "Comunications",
  "Freelacing",
  "Education",
  "Entrepresented",
  "Food",
  "Health",
  "Lega And HR",
  "Administrative Services",
  "Agriculture",
  "Hospitality",
  "Programming",
];

const StyledInterests = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);

  @media (max-width: 875px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Interests = () => {
  return (
    <StyledSection>
      <header>
        <StyledSectionTitle>
          What Interests you the most right now?
        </StyledSectionTitle>
      </header>
      <StyledInterests>
        {InterestsCategories.map((Interest, index) => (
          <InterestsItem text={Interest} key={index} />
        ))}
      </StyledInterests>
    </StyledSection>
  );
};

export default Interests;
