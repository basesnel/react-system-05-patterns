import { useEffect, useState } from "react";
import { fetchPosts } from "../../../utils/api";
import { PostCard } from "../PostCard/PostCard";
// import { PostsFilter } from "../PostsFilter/PostsFilter";

type Post = {
  id: number;
  title: string;
  body: string;
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
      {/* <PostsFilter posts={posts} /> */}
      {posts[0] && <PostCard post={posts[0]} />}
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { Posts };
