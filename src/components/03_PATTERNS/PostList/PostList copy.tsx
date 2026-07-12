import React, { type JSX } from "react";

type PostListType = {
  children?: JSX.Element[] | null | undefined;
};

type PostType = { id: number; title: string; body: string };

type PostItemType = {
  post: PostType;
  activePost?: number;
  onSelect?: (value: number) => void;
};

const PostList = ({ children }: PostListType) => {
  const [activePost, setActivePost] = React.useState<number | null>(null);

  const handleSelectPost = (postId: number) => setActivePost(postId);

  if (children)
    return React.Children.map(children, (child: JSX.Element) =>
      React.cloneElement(child, { activePost, onSelect: handleSelectPost }),
    );
};

PostList.Item = ({ post, activePost, onSelect }: PostItemType) => {
  const props = {
    ...(onSelect ? { onClick: () => onSelect(post.id) } : null),
  };

  return (
    <div
      className={`post-item ${activePost === post.id ? "active" : ""}`}
      {...props}
    >
      <h4>{post.title}</h4>
      {activePost === post.id && <p>{post.body}</p>}
    </div>
  );
};

// PostList.Item.displayName = "PostListItem";

export { PostList };
