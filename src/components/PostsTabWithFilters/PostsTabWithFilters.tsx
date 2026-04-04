import { TableWithFilters } from "../TabWithFilters/TabWithFilters";

type Post = {
  id: number;
  title: string;
  text: string;
};

interface Props {
  posts: Post[];
}

function PostsTableWithFilters({ posts }: Props) {
  return (
    <TableWithFilters<Post>
      data={posts}
      columns={["Title", "Text"]}
      renderRow={(post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.text}</td>
        </tr>
      )}
      sortStrategy={userSortStrategy}
      filterStrategy={userFilterStrategy}
    />
  );
}

export { PostsTableWithFilters };
