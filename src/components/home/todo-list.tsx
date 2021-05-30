import { useState, useEffect } from "react";
import styled from "styled-components";

import { TodoItem as TodoItemType } from "src/types/todo-item";
import TodoItem from "./todo-item";

function ToDoList() {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("toDoList") || "[]");
    setList(data);
  }, [reload]);

  const renderItems =
    list.length > 0
      ? list.map((item: TodoItemType, index: number) => (
          <TodoItem
            key={item.task + item.deadline}
            index={index}
            {...item}
            reload={reload}
            setReload={setReload}
          ></TodoItem>
        ))
      : "Register new to-do!";

  return <Wrapper>{renderItems}</Wrapper>;
}

export default ToDoList;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
`;
