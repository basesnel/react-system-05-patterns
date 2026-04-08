import type { ReactNode } from "react";
import { Card } from "../Card/Card";

type User = {
  id: number;
  name: string;
};

interface Props {
  user: User;
  postsSlot: ReactNode;
}

const UserCard = ({ user, postsSlot }: Props) => {
  return <Card title={user.name}>{postsSlot}</Card>;
};

export { UserCard };
