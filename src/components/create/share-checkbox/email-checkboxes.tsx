import { useState, useEffect } from "react";
import styled from "styled-components";

import { WHITE, GREY } from "@colors";
import { UserTypes } from "src/types/user";
import Email from "./email";

export default function EmailCheckboxes({
  isOpened,
  handleEmailListChange,
}: {
  isOpened: boolean;
  handleEmailListChange: (email: string, isChecked: boolean) => void;
}) {
  const [emailList, setEmailList] = useState<UserTypes[]>([]);

  useEffect(() => {
    const friendsList = JSON.parse(localStorage.getItem("friendsList") || "[]");
    setEmailList(friendsList);
  }, []);

  return (
    <ContentWrapper isOpened={isOpened}>
      {emailList.length > 0 ? (
        emailList.map((value) => (
          <Email
            key={value.email}
            value={value.email}
            handleEmailListChange={handleEmailListChange}
          />
        ))
      ) : (
        <Text>
          Please go to the "Add Friends" page and register your friends first
        </Text>
      )}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div<{ isOpened: boolean }>`
  width: 100%;
  max-height: 20rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 5rem 1.6rem 0.4rem 1.6rem;
  background-color: ${WHITE};
  ${({ isOpened }) =>
    !isOpened && "height: 0; padding: 4rem 1.6rem 0rem 1.6rem"};
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${GREY[600]};
`;
