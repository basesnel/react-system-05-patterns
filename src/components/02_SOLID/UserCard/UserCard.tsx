import { CommonCard } from "../CommonCard/CommonCard";

type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

interface UserCardProps {
  user: User;
}

// LSP - Liskov Substitution Principle
// const PostCard = (props: Props) => <Card {...props} />;
const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <CommonCard renderHeader={() => user.name} renderBody={() => user.phone} />
);

export { UserCard };
