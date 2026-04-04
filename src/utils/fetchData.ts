import { useEffect } from "react";

type Response<T> = {
  data: T | null;
  error: null | unknown;
};

async function fetchData<T>(endpoint: string): Promise<Response<T>> {
  try {
    const response = await fetch(
      `https:/jsonplaceholder.typicode.com/${endpoint}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data: T = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const fetchUser = async (userId: number) => {
  const userResponse = await fetchData<User>(`users/${userId}`);
  return userResponse;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: string;
};

const fetchPost = async (postId: number) => {
  const postResponse = await fetchData<Post>(`posts/${postId}`);
  return postResponse;
};

const useFetchUserId = (): void => {
  useEffect(() => {
    console.log(fetchUser(0));
  }, []);
};

export { fetchData, fetchUser, fetchPost, useFetchUserId };
