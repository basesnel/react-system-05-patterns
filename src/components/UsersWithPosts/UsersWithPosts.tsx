import { DataFetcher } from "../DataFetcher/DataFetcher";
import { UserPostsWithFetcher } from "../UserPostsWithFetcher/UserPostsWithFetcher";

type User = {
  id: number;
  name: string;
};

const UsersWithPosts = () => {
  return (
    <div>
      <h1>Users</h1>
      <DataFetcher<User[]>
        url="https:/jsonplaceholder.typicode.com/users"
        render={(data) => {
          return (
            <ul>
              {data?.map((user) => (
                <li key={user.id}>
                  {user.name}
                  <UserPostsWithFetcher userId={user.id} />
                </li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
};

export { UsersWithPosts };
