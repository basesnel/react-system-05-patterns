import { Box } from "./components/01_OOP/Box/Box";
import { CommentForm } from "./components/01_OOP/CommentForm/CommentForm";
import { HoverBox } from "./components/01_OOP/HoverBox/HoverBox";
import { LoginForm } from "./components/01_OOP/LoginForm/LoginForm";
import { UsersV04 } from "./components/01_OOP/UsersV04/UsersV04";
import { UsersV05 } from "./components/01_OOP/UsersV05/UsersV05";
import { useFetchUserId } from "./utils/fetchData";

function App() {
  useFetchUserId();

  return (
    <>
      <h1>App</h1>
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
