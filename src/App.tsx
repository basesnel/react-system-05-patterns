import { ListRenderer } from "./components/03_PATTERNS/ListRenderer/ListRenderer";

function App() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <h1>App</h1>
      <ListRenderer items={items} render={(item) => <p key={item}>{item}</p>} />
    </>
  );
}

export default App;
