import { fetchUsers } from "../../../utils/api";
import { useEffect, useState } from "react";
import { UserCard } from "../UserCard/UserCard";
import { UserPanelV02 } from "../UserPanelV02/UserPanelV02";
// import { UsersFilter } from "../UsersFilter/UsersFilter";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  webSite: string;
};

// Single Responsibility Principle (correct)
const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {/* <UsersFilter users={users} /> */}
      {users[0] && <UserCard user={users[0]} />}
      {users[1] && <UserPanelV02 user={users[1]} role="admin" />}
      {users[2] && <UserPanelV02 user={users[2]} role="subscriber" />}
      {users[3] && <UserPanelV02 user={users[3]} role="guest" />}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Users };
