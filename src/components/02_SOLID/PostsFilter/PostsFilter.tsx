import { CommonFilter } from "../ComonFilter/ComonFilter";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  posts: Post[];
}

// Open/Closed Principle (correct)
const PostsFilter = ({ posts }: Props) => {
  const postFilters = {
    all: () => true,
    hasTitle: (post: Post) => !!post.title,
    longPosts: (post: Post) => post.body.length > 50,
  };

  return (
    <CommonFilter<Post>
      data={posts}
      filters={postFilters}
      renderItem={(post: Post) => <li key={post.id}>{post.title}</li>}
    />
  );
};

export { PostsFilter };
