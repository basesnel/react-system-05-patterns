import { useEffect, useState } from "react";
import type { TodoService } from "../../../utils/ApiTodoService";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Props = {
  todoService: TodoService;
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
    const todo = await todoService.addTodo({ title: newTodo });
    setTodos((prevTodos) => [...prevTodos, todo]);
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
      <button onClick={handleAddTodo}>AddTodo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            {":"}
            {todo.completed ? "Completed" : "Uncompleted"}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoListV02 };
