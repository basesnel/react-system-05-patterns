import { Card } from "../Card/Card";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return <Card title={post.title}>{post.body}</Card>;
};

export { PostCard };
