import React, { useState } from "react";

import { Container } from "./styles";
import { Header, Footer } from "./components/UI";
import {
  Interests,
  CreditsCredentials,
  Preferences,
  Funding,
  Confirmation,
} from "./components";

const App = () => {
  const [section, setSection] = useState(1);

  const SECTIONS = [
    <Interests sectionIndex={section} />,
    <CreditsCredentials sectionIndex={section} />,
    <Preferences sectionIndex={section} />,
    <Funding sectionIndex={section} />,
    <Confirmation sectionIndex={section} />,
  ];

  const nextSection = () => {
    setSection((prev) => {
      if (prev === 5) return prev;
      return prev + 1;
    });
  };

  const prevSection = () => {
    setSection((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  return (
    <>
      <Header sectionIndex={section} />
      <Container>
        <Interests sectionIndex={section} />
        <CreditsCredentials sectionIndex={section} />
        <Preferences sectionIndex={section} />
        <Funding sectionIndex={section} />
        <Confirmation sectionIndex={section} />
      </Container>
      <Footer
        sectionIndex={section}
        nextSection={nextSection}
        prevSection={prevSection}
      />
    </>
  );
};

export default App;
