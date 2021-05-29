import styled from "styled-components";

import { GREEN, WHITE } from "@colors";
import PriorityRadiogroup from "./priority-radiogroup";
import ColorSelect from "./color-select";
import ShareCheckbox from "./share-checkbox";

export default function CreateToDo() {
  return (
    <Wrapper>
      <StyledForm>
        <InputGroup>
          <Label htmlFor="todo">To Do</Label>
          <TaskInput type="text" id="todo" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="deadline">Deadline</Label>
          <DateInput type="date" id="deadline" required />
        </InputGroup>
        <PriorityRadiogroup />
        <ColorSelect />
        <ShareCheckbox />
        <SaveButton type="submit">Save</SaveButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

const TaskInput = styled.input`
  font-size: 1.5rem;
  width: 70%;
`;

const DateInput = styled.input`
  font-size: 1.5rem;
  width: 70%;
`;

const SaveButton = styled.button`
  width: 12rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${GREEN};
  color: ${WHITE};
  font-size: 1.6rem;
  font-weight: 500;
  position: absolute;
  left: calc(50% - 6rem);
  bottom: 3rem;
  border: none;
`;
