type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

import type { TodoService } from "./ApiTodoService";

export class MockTodoService implements TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = [
      { id: 1, title: "Test Todo 1", completed: false },
      { id: 2, title: "Test Todo 2", completed: false },
    ];
  }

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    const newTodo: Todo = {
      id: Date.now(),
      title: todo.title || "Untitled",
      completed: todo.completed ?? false,
    };
    return newTodo;
  }

  async deleteTodo(id: number): Promise<number> {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    return id;
  }
}
