import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { LIME } from "@colors";

export default function CalendarComponents() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>📆 Check the calendar 📆</Title>
      </TitleWrapper>
      <Calendar />
    </Wrapper>
  );
}

const TitleWrapper = styled.div`
  background-color: ${LIME};
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 0.5rem 1rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, transparent, white), url("/ewha.jpeg");
`;
