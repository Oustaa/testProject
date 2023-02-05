import styled from "styled-components";

const Container = styled.div`
  width: calc(100% - 2rem);
  margin-inline: auto;
  max-width: 1200px;
`;

const StyledSection = styled.section`
  min-height: 500px;
  padding-bottom: 5rem;

  header {
    padding-block: var(--spacing-xxl);
    h1 + p {
      padding-top: var(--spacing-lg);
    }
  }
`;

const StyledSectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--dark-text);
`;

const StyledSectionDiscription = styled.p`
  text-align: center;
  font-weight: 400;
  color: var(--dark-text);
  width: 80%;
  max-width: calc(100% - 4rem);
  margin-inline: auto;
  @media (max-width: 670px) {
    width: 100%;
    max-width: unset;
  }
`;

const ButtonPrimary = styled.button`
  color: var(--white);
  background-color: var(--primary-color);
`;

const ButtonSecondary = styled.button`
  color: var(--primary-color);
  background-color: transparent;
  border: 1px solid var(--primary-color);
`;

const StyledAnswerCard = styled.div`
  border: 1px solid var(--dark-text);
  color: var(--dark-text);
  text-align: center;
  width: 100%;
  padding: var(--spacing-xl);
  padding-block: ${({ spacingTop }) =>
    !spacingTop
      ? "var(--spacing-xxl) var(--spacing-xl)"
      : "var(--spacing-xxl)"};
  border-radius: var(--rounded-radius-sl);

  grid-column: ${({ gridStart }) => `${gridStart} / span 1`};

  @media (max-width: 670px) {
    grid-column: unset;
  }

  h4 {
    font-weight: 400;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-bottom: var(--spacing-xxl);
    color: ${({ color }) => (color ? color : "var(--primary-color)")};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledGridContainer = styled.div`
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

export {
  Container,
  StyledSection,
  StyledSectionTitle,
  StyledSectionDiscription,
  ButtonPrimary,
  ButtonSecondary,
  StyledAnswerCard,
  StyledGridContainer,
};
