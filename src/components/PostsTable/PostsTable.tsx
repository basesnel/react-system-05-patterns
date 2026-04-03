import { Table } from "../Table/Table";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  posts: Post[];
}

function PostsTable({ posts }: Props) {
  return (
    <Table<Post>
      data={posts}
      columns={["Title", "Text"]}
      renderRow={(post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      )}
    />
  );
}

export { PostsTable };
