import { useState, useEffect } from "react";
import styled from "styled-components";

import { TodoItem as TodoItemType } from "src/types/todo-item";
import Search from "./search";
import TodoItem from "./todo-item";

function ToDoList() {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<TodoItemType[]>([]);
  const [reload, setReload] = useState<number>(0);

  useEffect(() => {
    let data: Array<TodoItemType> = Array.from(
      JSON.parse(localStorage.getItem("toDoList") || "[]")
    );

    // search
    if (query !== "") {
      data = data.filter((item) => item.task === query);
    }

    setList(data);
  }, [reload, query]);

  const renderItems =
    list.length > 0
      ? list.map((item: TodoItemType) => (
          <TodoItem
            key={item.id}
            id={item.id}
            {...item}
            reload={reload}
            setReload={setReload}
          ></TodoItem>
        ))
      : "Register new to-do!";

  return (
    <Wrapper>
      <ControlWrapper>
        <Search setQuery={setQuery} />
      </ControlWrapper>
      {renderItems}
    </Wrapper>
  );
}

export default ToDoList;

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const ControlWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
