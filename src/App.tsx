// import { Posts } from "./components/02_SOLID/Posts/Posts";
// import { Users } from "./components/02_SOLID/Users/Users";
import { TodoListV01 } from "./components/02_SOLID/TodoListV01/TodoListV01";
import { TodoListV02 } from "./components/02_SOLID/TodoListV02/TodoListV02";
// import { ApiTodoService } from "./utils/ApiTodoService";
import { MockTodoService } from "./utils/MockTodoService";

// const todoService = new ApiTodoService();
const todoService = new MockTodoService();

function App() {
  return (
    <>
      <h1>App</h1>
      <TodoListV01 />
      <TodoListV02 todoService={todoService} />
      {/* <Users />
      <Posts /> */}
    </>
  );
}

export default App;
