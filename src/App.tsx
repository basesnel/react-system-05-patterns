import { Posts } from "./components/02_SOLID/Posts/Posts";
import { Users } from "./components/02_SOLID/Users/Users";

import { UsersAndPosts } from "./components/02_SOLID/UsersAndPosts/UsersAndPosts";

function App() {
  return (
    <>
      <h1>App</h1>
      <UsersAndPosts />
      <Users />
      <Posts />
    </>
  );
}

export default App;
