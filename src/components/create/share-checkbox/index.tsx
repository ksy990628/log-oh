import React, { useState } from "react";
import styled from "styled-components";

import { GREEN } from "@colors";
import Header from "./header";
import EmailCheckboxes from "./email-checkboxes";

export default function ShareCheckbox({
  handleEmailListChange,
}: {
  handleEmailListChange: (email: string, isChecked: boolean) => void;
}) {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const toggleOpened = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Wrapper>
      <Header
        title="Share With Others"
        isOpened={isOpened}
        toggleOpened={toggleOpened}
      />
      {isOpened && (
        <EmailCheckboxes handleEmailListChange={handleEmailListChange} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  min-height: 4rem;
  border-radius: 1rem;
  border: 0.2rem solid ${GREEN};
  position: relative;
  overflow: hidden;
`;
