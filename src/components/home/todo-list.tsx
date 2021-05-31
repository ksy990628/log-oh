import { useState, useEffect } from "react";
import styled from "styled-components";

import { TodoItem as TodoItemType } from "src/types/todo-item";
import Search from "./search";
import Filter from "./filter";
import TodoItem from "./todo-item";

function ToDoList() {
  const [query, setQuery] = useState<string>("");
  const [sorting, setSorting] = useState<string>("highPriority");
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
    // sorting
    if (sorting === "highPriority") {
      const compareFunction = (a: TodoItemType, b: TodoItemType) =>
        parseInt(b.priority, 10) - parseInt(a.priority, 10);
      data = data.sort(compareFunction);
    } else if (sorting === "lowPriority") {
      const compareFunction = (a: TodoItemType, b: TodoItemType) =>
        parseInt(a.priority, 10) - parseInt(b.priority, 10);
      data = data.sort(compareFunction);
    } else if (sorting === "earlyDeadline") {
      const compareFunction = (a: TodoItemType, b: TodoItemType) =>
        parseInt(a.deadline.replaceAll("-", ""), 10) -
        parseInt(b.deadline.replaceAll("-", ""), 10);
      data = data.sort(compareFunction);
    } else if (sorting === "lateDeadline") {
      const compareFunction = (a: TodoItemType, b: TodoItemType) =>
        parseInt(b.deadline.replaceAll("-", ""), 10) -
        parseInt(a.deadline.replaceAll("-", ""), 10);
      data = data.sort(compareFunction);
    }

    setList(data);
  }, [reload, query, sorting]);

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(event.target.value);
  };

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
        <Filter handleSortingChange={handleSortingChange} />
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
  justify-content: space-between;
`;
