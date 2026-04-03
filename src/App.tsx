// import { UsersV02 } from "./components/UsersV02/UsersV02";
// import { UsersV01 } from "./components/UsersV01/UsersV01";
// import { UsersV03 } from "./components/UsersV03/UsersV03";
// import { UsersWithPosts } from "./components/UsersWithPosts/UsersWithPosts";

import { CommentForm } from "./components/CommentForm/CommentForm";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UsersV04 } from "./components/UsersV04/UsersV04";

function App() {
  return (
    <>
      <h1>App</h1>
      {/* <UsersV01 /> */}
      {/* <UsersV02 /> */}
      {/* <UsersV03 /> */}
      {/* <UsersWithPosts /> */}
      <LoginForm />
      <CommentForm />
      <UsersV04 />
    </>
  );
}

export default App;
