import { CommonFilter } from "../ComonFilter/ComonFilter";

type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

interface Props {
  users: User[];
}

// Open/Closed Principle (correct)
const UsersFilter = ({ users }: Props) => {
  const userFilters = {
    all: () => true,
    hasPhone: (user: User) => !!user.phone,
    hasWebsite: (user: User) => !!user.webSite,
  };

  return (
    <CommonFilter<User>
      data={users}
      filters={userFilters}
      renderItem={(user: User) => <li key={user.id}>{user.name}</li>}
    />
  );
};

export { UsersFilter };
