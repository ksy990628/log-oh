import styled from "styled-components";

import ProfileIcon from "src/assets/icons/profile";
import { GREY, LIME } from "@colors";

export default function UserProfile() {
  return (
    <Wrapper>
      <ProfileIcon fill={LIME} style={{ width: "7.5rem", height: "7.5rem" }} />
      <TextWrapper>
        <Username>USER NAME</Username>
        <UserEmail>example@example.com</UserEmail>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Username = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

const UserEmail = styled.p`
  font-size: 1.4rem;
  color: ${GREY[700]};
`;
