import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todoService: () => void;
};

// DIP - Dependancy Inversion Principle (correct)
const TodoListV02 = ({ todoService }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    todoService.getTodos().then((data) => setTodos(data));
  }, [todoService]);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    const todo = await todoService({ title: newTodo });
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = async (id: number) => {
    await todoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
    </div>
  );
};

export { TodoListV02 };
