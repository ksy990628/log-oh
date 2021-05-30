import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { GREEN, WHITE } from "@colors";
import PriorityRadiogroup from "./priority-radiogroup";
import ColorSelect from "./color-select";
import ShareCheckbox from "./share-checkbox";

export default function CreateToDo() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [priority, setPriority] = useState<string>("1");
  const [color, setColor] = useState<string>("red");
  const [emailList, setEmailList] = useState<Set<string>>(new Set());
  const [isDone, setIsDone] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      task,
      deadline,
      priority,
      color,
      emailList: Array.from(emailList),
      isDone,
    };

    const list = JSON.parse(localStorage.getItem("toDoList") || "[]");

    if (router.query.id) {
      const id = router.query.id.toString();
      list[id] = data;
      localStorage.setItem("toDoList", JSON.stringify(list));
    } else {
      localStorage.setItem("toDoList", JSON.stringify([...list, data]));
    }
    router.push("/");
  };

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleDeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(event.target.value);
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(event.currentTarget.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleEmailListChange = (email: string, isChecked: boolean) => {
    if (isChecked) {
      emailList.add(email);
      setEmailList(emailList);
    } else if (!isChecked && emailList.has(email)) {
      emailList.delete(email);
      setEmailList(emailList);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="todo">To Do</Label>
          <TaskInput
            type="text"
            id="todo"
            value={task}
            onChange={handleTaskChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="deadline">Deadline</Label>
          <DateInput
            type="date"
            id="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
            required
          />
        </InputGroup>
        <PriorityRadiogroup
          checkedValue={priority}
          handlePriorityChange={handlePriorityChange}
        />
        <ColorSelect handleColorChange={handleColorChange} />
        <ShareCheckbox handleEmailListChange={handleEmailListChange} />
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
