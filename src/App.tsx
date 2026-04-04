// import { UsersV02 } from "./components/UsersV02/UsersV02";
// import { UsersV01 } from "./components/UsersV01/UsersV01";
// import { UsersV03 } from "./components/UsersV03/UsersV03";
// import { UsersWithPosts } from "./components/UsersWithPosts/UsersWithPosts";

import { Box } from "./components/Box/Box";
import { CommentForm } from "./components/CommentForm/CommentForm";
import { HoverBox } from "./components/HoverBox/HoverBox";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { UsersV04 } from "./components/UsersV04/UsersV04";
import { UsersV05 } from "./components/UsersV05/UsersV05";
import { useFetchUserId } from "./utils/fetchData";

function App() {
  useFetchUserId();

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
      <Box as="section">It's a section</Box>
      <Box as="button" onClick={() => alert("Clicked!")}>
        Button
      </Box>
      <Box as="a" href="https://react.dev">
        Link
      </Box>
      <HoverBox
        render={(hovered) => (hovered ? "Got hovered me!" : "Hover me!")}
      />
      <HoverBox
        render={(hovered) => (
          <button
            style={{ background: hovered ? "blue" : "gray", color: "white" }}
          >
            {hovered ? "Got hovered!" : "Click me!"}
          </button>
        )}
      />
      <UsersV05 />
    </>
  );
}

export default App;
