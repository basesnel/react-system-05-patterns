import { useState } from "react";

type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

interface Props {
  users: User[];
}

// Open/Closed Principle (wrong)
const Filter = ({ users }: Props) => {
  const [filter, setFilter] = useState("all");

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true;
    if (filter === "hasPhone") return user.phone;
    if (filter === "hasWebsite") return user.webSite;
    return true;
  });

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Users</option>
        <option value="hasPhone">Users with Phone</option>
        <option value="hasWebsite">Users with Website</option>
      </select>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Filter };
