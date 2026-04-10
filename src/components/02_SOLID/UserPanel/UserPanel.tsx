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

// Interface Segregation Principle (ISP)
const UserPanel = ({ user, role }: Props) => {
  const handleEditClick = () => {
    if (role === "admin") {
      console.log("Editing user");
    }
  };

  const handleDeleteClick = () => {
    if (role === "admin") {
      console.log("Deleting user");
    }
  };

  const handleCommentClick = () => {
    if (role === "admin") {
      console.log("Adding comment");
    }
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      {role === "admin" && (
        <div>
          <button onClick={handleEditClick}>Edit User</button>
          <button onClick={handleDeleteClick}>Delete User</button>
        </div>
      )}

      {role === "subscriber" && (
        <div>
          <button onClick={handleCommentClick}>Add Comment</button>
        </div>
      )}

      {role === "guest" && <p>Guest cannot interact with the system</p>}
    </div>
  );
};

export { UserPanel };
