const fetchUsers = async () => {
  const response = await fetch("https:/jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
};

const fetchPosts = async () => {
  const response = await fetch("https:/jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  return result;
};

export { fetchPosts, fetchUsers };
