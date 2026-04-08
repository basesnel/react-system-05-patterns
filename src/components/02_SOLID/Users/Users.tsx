import { useFetch } from "../../../utils/useFetch";
import { Filter } from "../Filter/Filter";

type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

const Users = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https:/jsonplaceholder.typicode.com/users",
  );

  if (loading) return <div>Users fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Users</h2>
      {data && <Filter users={data} />}
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Users };
