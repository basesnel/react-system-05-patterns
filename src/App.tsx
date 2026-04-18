import { DataFetcher } from "./components/03_PATTERNS/DataFetcher/DataFetcher";
import { ListRenderer } from "./components/03_PATTERNS/ListRenderer/ListRenderer";
import { Table } from "./components/03_PATTERNS/Table/Table";

type userType = {
  id: number;
  name: string;
  age: number;
};

type carType = {
  id: number;
  brand: string;
  model: string;
  year: number;
};

function App() {
  const items = ["Apple", "Banana", "Cherry"];

  const userData: userType[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 28 },
  ];

  const carData: carType[] = [
    { id: 1, brand: "BMW", model: "XS", year: 2020 },
    { id: 2, brand: "Tesla", model: "Model 3", year: 2021 },
    { id: 3, brand: "Audi", model: "Q7", year: 2019 },
  ];

  const renderUserHeader = () => (
    <>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </>
  );

  const renderUserRow = (user: userType) => (
    <>
      <td data-label="ID">{user.id}</td>
      <td data-label="Name">{user.name}</td>
      <td data-label="Age">{user.age}</td>
    </>
  );

  const renderCarHeader = () => (
    <>
      <th>ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Year</th>
    </>
  );

  const renderCarRow = (car: carType) => (
    <>
      <td data-label="ID">{car.id}</td>
      <td data-label="Brand">{car.brand}</td>
      <td data-label="Model">{car.model}</td>
      <td data-label="Year">{car.year}</td>
    </>
  );

  return (
    <>
      <h1>Data table</h1>

      <h2>List</h2>
      <ListRenderer<string>
        items={items}
        render={(item) => <p key={item}>{item}</p>}
      />

      <h2>Users</h2>
      <Table<userType>
        data={userData}
        renderHeader={renderUserHeader}
        renderRow={renderUserRow}
      />

      <h2>Cars</h2>
      <Table<carType>
        data={carData}
        renderHeader={renderCarHeader}
        renderRow={renderCarRow}
      />

      <DataFetcher
        url="https:/jsonplaceholder.typicode.com/posts"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <ul>
              {data.slice(0, 5).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          );
        }}
      />

      <DataFetcher
        url="https:/jsonplaceholder.typicode.com/users"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;

          return (
            <ul>
              {data.slice(0, 5).map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />
    </>
  );
}

export default App;
