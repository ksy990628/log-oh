import Layout from "src/layouts";
import TodoList from "src/components/home/todo-list";
import PlusButton from "src/components/home/plus-button";

export default function Home() {
  return (
    <Layout>
      <TodoList />
      <PlusButton />
    </Layout>
  );
}
