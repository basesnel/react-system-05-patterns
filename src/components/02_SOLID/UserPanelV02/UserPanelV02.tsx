type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  webSite: string;
};

interface Props {
  user: User;
  role: "admin" | "subscriber" | "guest";
}

// ISP - Interface Segregation Principle (correct)
const UserPanelV02 = ({ user, role }: Props) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && <AdminActions />}
      {role === "subscriber" && <SubscriberActions />}
      {role === "guest" && <GuestActions />}
    </div>
  );
};

export { UserPanelV02 };
