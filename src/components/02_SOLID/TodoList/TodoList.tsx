import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      const response = await fetch("https:/jsonplaceholder.typicode.com/todos");
      const data: Todo[] = await response.json();
      setTodos(data.slice(0, 10));
    };
    fetchTodos();
  }, []);

  const createTodo = async (title: string): Promise<void> => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    });
    const newTodo: Todo = await response.json();
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = async (id: number): Promise<void> => {
    await fetch(`https:/jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button onClick={() => createTodo("New Task")}>AddTodo</button>
      <ul></ul>
    </div>
  );
};

export { TodoList };
