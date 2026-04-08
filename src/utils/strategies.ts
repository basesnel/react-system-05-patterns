type User = {
  id: number;
  name: string;
  email: string;
};

type Post = {
  id: number;
  title: string;
  text: string;
};

const userSortStrategy = (a: User, b: User) => a.name.localeCompare(b.name);
const userFilterStrategy = (data: User[]) =>
  data.filter((user) => user.name.includes("Leanne"));
const postSortStrategy = (a: Post, b: Post) => a.title.localeCompare(b.title);
const postFilterStrategy = (data: Post[]) =>
  data.filter((post) => post.title.includes("autumn"));

export {
  userSortStrategy,
  userFilterStrategy,
  postSortStrategy,
  postFilterStrategy,
};
