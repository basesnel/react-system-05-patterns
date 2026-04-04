import { userFilterStrategy, userSortStrategy } from "../../utils/ strategies";
import { TableWithFilters } from "../TabWithFilters/TabWithFilters";

type User = {
  id: number;
  name: string;
  email: string;
};

interface Props {
  users: User[];
}

function UsersTableWithFilters({ users }: Props) {
  return (
    <TableWithFilters<User>
      data={users}
      columns={["Name", "Email"]}
      renderRow={(user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )}
      sortStrategy={userSortStrategy}
      filterStrategy={userFilterStrategy}
    />
  );
}

export { UsersTableWithFilters };
