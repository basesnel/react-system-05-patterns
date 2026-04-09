import { fetchUsers } from "../../../utils/api";
import { useEffect, useState } from "react";
import { Filter } from "../Filter/Filter";

type User = {
  id: number;
  name: string;
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
      {users && <Filter users={users} />}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Users };
