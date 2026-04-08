import { useFetch } from "../../../utils/useFetch";

interface Props {
  userId: number;
}

type Post = {
  id: number;
  title: string;
  body: string;
};

const UserPostsV01 = ({ userId }: Props) => {
  const { data, loading, error } = useFetch<Post[]>(
    `https:/jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );

  if (loading) return <div>Posts fetching...</div>;
  if (error) return <div>{error}</div>;

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
};

export { UserPostsV01 };
