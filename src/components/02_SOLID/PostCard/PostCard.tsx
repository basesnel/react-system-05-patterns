import { CommonCard } from "../CommonCard/CommonCard";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface PostCardProps {
  post: Post;
}

// LSP - Liskov Substitution Principle
// const PostCard = (props: Props) => <Card {...props} />;
const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <CommonCard renderHeader={() => post.title} renderBody={() => post.body} />
);

export { PostCard };
