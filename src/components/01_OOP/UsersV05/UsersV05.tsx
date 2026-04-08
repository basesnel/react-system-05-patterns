import { useFetch } from "../../../utils/useFetch";
import { UsersTableWithFilters } from "../UsersTabWithFilters/UsersTabWithFilters";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersV05 = () => {
  const { data, loading, error } = useFetch<User[]>(
    "https:/jsonplaceholder.typicode.com/users",
  );

  if (loading) return <div>Users fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Users</h1>
      {data && <UsersTableWithFilters users={data} />}
    </div>
  );
};

export { UsersV05 };
