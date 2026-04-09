import { Card } from "../Card/Card";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  data: Post;
}

// LSP - Liskov Substitution Principle
const PostCard = (props: Props) => <Card {...props} />;

export { PostCard };
