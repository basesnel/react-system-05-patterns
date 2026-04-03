import { Table } from "../Table/Table";

type User = {
  id: number;
  name: string;
  email: string;
};

interface Props {
  users: User[];
}

function UsersTable({ users }: Props) {
  return (
    <Table<User>
      data={users}
      columns={["Name", "Email"]}
      renderRow={(user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )}
    />
  );
}

export { UsersTable };
