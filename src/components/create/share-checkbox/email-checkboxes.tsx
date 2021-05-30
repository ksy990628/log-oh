import { WHITE } from "@colors";
import styled from "styled-components";

import Email from "./email";

export default function EmailCheckboxes({
  handleEmailListChange,
}: {
  handleEmailListChange: (email: string, isChecked: boolean) => void;
}) {
  const EMAILS = [
    "example1@example.com",
    "example2@example.com",
    "example3@example.com",
    "example4@example.com",
  ];

  return (
    <ContentWrapper>
      {EMAILS.map((value) => (
        <Email
          key={value}
          value={value}
          handleEmailListChange={handleEmailListChange}
        />
      ))}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 5rem 1.6rem 0.4rem 1.6rem;
  background-color: ${WHITE};
`;
