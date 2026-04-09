import { useEffect, useState } from "react";
import { fetchPosts } from "../../../utils/api";

type Post = {
  id: number;
  title: string;
};

// Single Responsibility Principle (correct)
const Posts = () => {
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

    loadPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
