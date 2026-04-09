import { useFetch } from "../../../utils/useFetch";

type Post = {
  id: number;
  title: string;
};

// Single Responsibility Principle
const Posts = () => {
  const { data, loading, error } = useFetch<Post[]>(
    "https:/jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <div>Users fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
