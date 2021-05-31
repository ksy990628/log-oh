import styled from "styled-components";

import { BLACK, GREEN, WHITE } from "@colors";
import { TodoItem as TodoItemType } from "src/types/todo-item";
import XIcon from "src/assets/icons/x";

type ToDoItemProps = TodoItemType & {
  index: number;
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

function ToDoItem(props: ToDoItemProps) {
  const {
    index,
    task,
    deadline,
    priority,
    color,
    emailList,
    isDone,
    reload,
    setReload,
  } = props;

  const toggleIsDone = () => {
    const list = JSON.parse(localStorage.getItem("toDoList") || "[]");
    list[index].isDone = !list[index].isDone;
    localStorage.setItem("toDoList", JSON.stringify(list));
    setReload(reload + 1);
  };

  const deleteItem = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      const list = JSON.parse(localStorage.getItem("toDoList") || "[]");
      list.splice(index, 1);
      localStorage.setItem("toDoList", JSON.stringify(list));
      setReload(reload + 1);
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <ColorSpan color={color}>{priority}</ColorSpan>
        <TextWrapper>
          <TaskTitle isDone={isDone} onClick={toggleIsDone}>
            {task}
          </TaskTitle>
          <Deadline>Deadline : {deadline}</Deadline>
        </TextWrapper>
      </ContentWrapper>
      <DeleteButton onClick={deleteItem}>
        <XIcon fill={BLACK} style={{ width: "1.4rem", height: "1.4rem" }} />
      </DeleteButton>
    </Wrapper>
  );
}

export default ToDoItem;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  border: 2px solid ${GREEN};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorSpan = styled.span<{ color: string }>`
  width: 1.2rem;
  height: 100%;
  background-color: ${({ color }) => color};
  margin-right: 1rem;
  color: ${WHITE};
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
`;

const TextWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TaskTitle = styled.p<{ isDone: boolean }>`
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const Deadline = styled.p``;

const DeleteButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
`;
