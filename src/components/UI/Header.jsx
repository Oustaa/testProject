import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styled from "styled-components";
import { Container } from "../../styles";

const HEADERS = [
  "Subject",
  "Credits/Credentials",
  "Preferences",
  "Funding",
  "Confirmation",
];

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
  h4 {
    font-weight: 400;
    color: var(--primary-color);
  }
`;

const StyledProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    margin-right: var(--spacing-sl);
  }

  span {
    color: var(--gray);
  }
`;

const Header = ({ sectionIndex }) => {
  const persentage = (sectionIndex / 6) * 100;
  return (
    <Container>
      <StyledHeader>
        <h4>{HEADERS[sectionIndex - 1]}</h4>
        <StyledProgressContainer>
          <div style={{ width: "20px", height: "20px" }}>
            <CircularProgressbar
              value={persentage}
              styles={buildStyles({
                pathColor: "#402554",
              })}
            />
          </div>
          <span>{sectionIndex}/6</span>
        </StyledProgressContainer>
      </StyledHeader>
    </Container>
  );
};

export default Header;
