import React, { useState } from "react";

import styled from "styled-components";

const StyledInterestsItem = styled.div`
  padding: var(--spacing-xl);
  text-align: center;
  color: var(--gray);
  border: 1px solid var(--gray);
  border-radius: var(--rounded-radius-sl);

  transition: transform 500ms cubic-bezier(0.71, -0.67, 0, 1.79);

  &:hover {
    cursor: pointer;
  }

  &[data-selected="true"] {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color-100);
    transform: scale(1.05);
  }
`;

const InterestsItem = ({ text }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    setSelected((prev) => !prev);
  };

  return (
    <StyledInterestsItem data-selected={selected} onClick={toggleSelection}>
      {text}
    </StyledInterestsItem>
  );
};

export default InterestsItem;
