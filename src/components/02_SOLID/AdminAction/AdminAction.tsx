const AdminAction = () => {
  const handleEditClick = () => {
    console.log("Editing user");
  };

  const handleDeleteClick = () => {
    console.log("Deleting user");
  };

  return (
    <div>
      <button onClick={handleEditClick}>Edit User</button>
      <button onClick={handleDeleteClick}>Delete User</button>
    </div>
  );
};

export { AdminAction };
