import { useFetch } from "../../../utils/useFetch";
import { UserCard } from "../UserCard/UserCard";
import { UserPostsV03 } from "../UserPostsV03/UserPostsV03";

type User = {
  id: number;
  name: string;
};

const UsersV03 = () => {
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
            <UserCard
              user={user}
              postsSlot={<UserPostsV03 userId={user.id} />}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UsersV03 };
