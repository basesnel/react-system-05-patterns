import { useFetch } from "../../utils/useFetch";

type User = {
  id: number;
  name: string;
};

function Users() {
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
            {/* <UserPosts userId={user.id} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Users };
