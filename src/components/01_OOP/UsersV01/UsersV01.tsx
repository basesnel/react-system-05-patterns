import { useFetch } from "../../../utils/useFetch";
import { UserPostsV01 } from "../UserPostsV01/UserPostsV01";

type User = {
  id: number;
  name: string;
};

const UsersV01 = () => {
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
            <UserPostsV01 userId={user.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UsersV01 };
