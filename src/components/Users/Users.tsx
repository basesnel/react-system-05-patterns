import { useFetch } from "../../utils/useFetch";
import { PaginatedUserPosts } from "../PaginatedUserPosts/PaginatedUserPosts";

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https:/jsonplaceholder.typicode.com/users",
  );

  if (loading) return <div>Users fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}
            <PaginatedUserPosts userId={user.id} page={1} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Users };
