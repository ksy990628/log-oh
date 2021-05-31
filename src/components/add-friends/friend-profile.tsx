import styled from "styled-components";

import { GREY } from "@colors";
import { UserTypes } from "src/types/user";
import ProfileIcon from "src/assets/icons/profile";
import XIcon from "src/assets/icons/x";

export default function UserProfile({ name, email }: UserTypes) {
  return (
    <Wrapper>
      <ContentsWrapper>
        <ProfileIcon
          fill={GREY[300]}
          style={{ width: "5rem", height: "5rem" }}
        />
        <TextWrapper>
          <Username>{name}</Username>
          <UserEmail>{email}</UserEmail>
        </TextWrapper>
      </ContentsWrapper>
      <DeleteButton>
        <XIcon fill={GREY[500]} style={{ width: "1.6rem", height: "1.6rem" }} />
      </DeleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem 3rem;
  display: flex;
  border-bottom: 1px solid ${GREY[500]};
  justify-content: space-between;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.6rem;
`;

const Username = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const UserEmail = styled.p`
  font-size: 1.2rem;
  color: ${GREY[700]};
`;

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
`;
