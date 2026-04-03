import { DataFetcher } from "../DataFetcher/DataFetcher";

interface Props {
  userId: number;
}

type Post = {
  id: number;
  title: string;
  body: string;
};

function UserPostsWithFetcher({ userId }: Props) {
  return (
    <DataFetcher<Post[]>
      url={`https:/jsonplaceholder.typicode.com/posts?userId=${userId}`}
      render={(data) => {
        return (
          <div>
            <h2>User {userId}'s posts</h2>
            <ul>
              {data?.map((post) => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
}

export { UserPostsWithFetcher };
