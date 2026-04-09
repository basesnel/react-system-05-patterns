import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../../../utils/api";

type User = {
  id: number;
  name: string;
};

type Post = {
  id: number;
  title: string;
};

const UsersAndPosts = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };

    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.log("Error loading data:", error);
      }
    };

    loadPosts();
    loadUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { UsersAndPosts };
