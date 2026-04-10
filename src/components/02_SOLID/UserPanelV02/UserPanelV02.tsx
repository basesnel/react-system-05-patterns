import { AdminActions } from "../AdminActions/AdminActions";
import { GuestActions } from "../GuestActions/GuestActions";
import { SubscriberActions } from "../SubscriberActions/SubscriberActions";

import styles from "./styles.module.css";

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
    <div className={styles.panel}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && <AdminActions />}
      {role === "subscriber" && <SubscriberActions />}
      {role === "guest" && <GuestActions />}
    </div>
  );
};

export { UserPanelV02 };
