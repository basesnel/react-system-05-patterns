// import { useState } from "react";
import { Accordion } from "./components/03_PATTERNS/Accordion/Accordion";
// import { Card } from "./components/03_PATTERNS/Card/Card";
// import { DataFetcher } from "./components/03_PATTERNS/DataFetcher/DataFetcher";
// import { InputWithSlot } from "./components/03_PATTERNS/InputWithSlot/InputWithSlot";
// import { ListRenderer } from "./components/03_PATTERNS/ListRenderer/ListRenderer";
// import { Modal } from "./components/03_PATTERNS/Modal/Modal";
// import { Table } from "./components/03_PATTERNS/Table/Table";

// type userType = {
//   id: number;
//   name: string;
//   age: number;
// };

// type carType = {
//   id: number;
//   brand: string;
//   model: string;
//   year: number;
// };

// type UserFetcher = {
//   id: number;
//   name: string;
//   email?: string;
// };

// type PostFetcher = {
//   id: number;
//   title: string;
//   body?: string;
// };

function App() {
  // const items = ["Apple", "Banana", "Cherry"];

  // const userData: userType[] = [
  //   { id: 1, name: "John", age: 30 },
  //   { id: 2, name: "Jane", age: 25 },
  //   { id: 3, name: "Alice", age: 28 },
  // ];

  // const carData: carType[] = [
  //   { id: 1, brand: "BMW", model: "XS", year: 2020 },
  //   { id: 2, brand: "Tesla", model: "Model 3", year: 2021 },
  //   { id: 3, brand: "Audi", model: "Q7", year: 2019 },
  // ];

  // const renderUserHeader = () => (
  //   <>
  //     <th>ID</th>
  //     <th>Name</th>
  //     <th>Age</th>
  //   </>
  // );

  // const renderUserRow = (user: userType) => (
  //   <>
  //     <td data-label="ID">{user.id}</td>
  //     <td data-label="Name">{user.name}</td>
  //     <td data-label="Age">{user.age}</td>
  //   </>
  // );

  // const renderCarHeader = () => (
  //   <>
  //     <th>ID</th>
  //     <th>Brand</th>
  //     <th>Model</th>
  //     <th>Year</th>
  //   </>
  // );

  // const renderCarRow = (car: carType) => (
  //   <>
  //     <td data-label="ID">{car.id}</td>
  //     <td data-label="Brand">{car.brand}</td>
  //     <td data-label="Model">{car.model}</td>
  //     <td data-label="Year">{car.year}</td>
  //   </>
  // );

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const handleToggle = (index: number) => {
  //   setActiveIndex((prevIndex: number | null) =>
  //     prevIndex === index ? null : index,
  //   );
  // };

  return (
    <>
      {/* <h1>Data table</h1>

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

      <DataFetcher<PostFetcher[]>
        url="https:/jsonplaceholder.typicode.com/posts"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;

          if (error) {
            if (error instanceof Error) return <p>{error?.message}</p>;
            return <p>{String(error)}</p>;
          }

          return (
            <ul>
              {data?.slice(0, 5).map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          );
        }}
      />

      <DataFetcher<UserFetcher[]>
        url="https:/jsonplaceholder.typicode.com/users"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;

          if (error) {
            if (error instanceof Error) return <p>{error?.message}</p>;
            return <p>{String(error)}</p>;
          }

          return (
            <ul>
              {data?.slice(0, 5).map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          );
        }}
      />

      <Card header={<h3>User information</h3>} footer={<button>Detail</button>}>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example</p>
      </Card>

      <DataFetcher<UserFetcher[]>
        url="https:/jsonplaceholder.typicode.com/users"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;

          if (error) {
            if (error instanceof Error) return <p>{error?.message}</p>;
            return <p>{String(error)}</p>;
          }

          return (
            <ul>
              {data?.slice(0, 5).map((user) => (
                <li key={user.id}>
                  <Card
                    header={<h3>User information</h3>}
                    footer={<button>Detail</button>}
                  >
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                  </Card>
                </li>
              ))}
            </ul>
          );
        }}
      />

      <DataFetcher<PostFetcher[]>
        url="https:/jsonplaceholder.typicode.com/posts"
        render={({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;

          if (error) {
            if (error instanceof Error) return <p>{error?.message}</p>;
            return <p>{String(error)}</p>;
          }

          return (
            <ul>
              {data?.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <Card
                    header={<h3>User information</h3>}
                    footer={<button>Detail</button>}
                  >
                    <p>Title: {post.title}</p>
                    <p>Description: {post.body}</p>
                  </Card>
                </li>
              ))}
            </ul>
          );
        }}
      />

      <div>
        <InputWithSlot
          label="Search"
          placeholder="Type a request"
          iconLeft={<span>🔍</span>}
        />
      </div>

      <div>
        <Modal
          headerSlot={<h3>Modal's header</h3>}
          footerSlot={<button>Close</button>}
        >
          <p>Modal's content</p>
        </Modal>
      </div> */}

      <div>
        <h2>Accordion example</h2>
        {/* <Accordion>
          <Accordion.Item
            title="Section 1"
            isActive={activeIndex === 0}
            onToggle={() => handleToggle(0)}
          >
            Content for Section 1.
          </Accordion.Item>
          <Accordion.Item
            title="Section 2"
            isActive={activeIndex === 1}
            onToggle={() => handleToggle(1)}
          >
            Content for Section 1.
          </Accordion.Item>
          <Accordion.Item
            title="Section 3"
            isActive={activeIndex === 2}
            onToggle={() => handleToggle(2)}
          >
            Content for Section 1.
          </Accordion.Item>
        </Accordion> */}
        {/* <Accordion defaultValue="panel-1">
          <Accordion.Item value="panel-1">
            <Accordion.Trigger value="panel-1">
              Type-Safe Heading 1
            </Accordion.Trigger>
            <Accordion.Content value="panel-1">
              Enjoy structural safety and robust autocomplete 1!
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="panel-2">
            <Accordion.Trigger value="panel-2">
              Type-Safe Heading 2
            </Accordion.Trigger>
            <Accordion.Content value="panel-2">
              Enjoy structural safety and robust autocomplete 2!
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="panel-3">
            <Accordion.Trigger value="panel-3">
              Type-Safe Heading 3
            </Accordion.Trigger>
            <Accordion.Content value="panel-3">
              Enjoy structural safety and robust autocomplete 3!
            </Accordion.Content>
          </Accordion.Item>
        </Accordion> */}
        <Accordion defaultValue="billing">
          <Accordion.Item value="billing">
            <Accordion.Trigger>Billing Information</Accordion.Trigger>
            <Accordion.Content>
              Your next payment is due on the 15th of this month.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="support">
            <Accordion.Trigger>Technical Support</Accordion.Trigger>
            <Accordion.Content>
              Open a ticket inside your profile dashboard foe immediate support.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="education">
            <Accordion.Trigger>Education</Accordion.Trigger>
            <Accordion.Content>
              The curriculum at our academy.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default App;
