import { useState } from "react";

type User = {
  id: number;
  name: string;
  phone: string;
  webSite: string;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

interface Props {
  users: User[];
  posts: Post[];
  dataType: "users" | "posts";
}

// Open/Closed Principle (wrong)
const FilterWithPosts = ({ users, posts, dataType }: Props) => {
  const [filter, setFilter] = useState("all");

  const filteredData = users.filter(() => {
    if (dataType === "users") {
      return users?.filter((user) => {
        if (filter === "all") return true;
        if (filter === "hasPhone") return !!user.phone;
        if (filter === "hasWebsite") return !!user.webSite;
        return true;
      });
    } else if (dataType === "posts") {
      return posts?.filter((post) => {
        if (filter === "all") return true;
        if (filter === "longPosts") return post.body.length > 200;
        if (filter === "hasTitle") return !!post.title;
        return true;
      });
    }
    return [];
  });

  return (
    <div>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {dataType === "users" && (
          <>
            <option value="all">All Users</option>
            <option value="hasPhone">Users with Phone</option>
            <option value="hasWebsite">Users with Website</option>
          </>
        )}
        {dataType === "posts" && (
          <>
            <option value="all">All Users</option>
            <option value="longPosts">Posts longer than 200 Characters</option>
            <option value="longPosts">Posts with Title</option>
          </>
        )}
      </select>
      <ul>
        {filteredData?.map((item) =>
          dataType === "users" ? (
            <li key={item.id}>{(item as User).name}</li>
          ) : (
            <li key={item.id}>{(item as unknown as Post).title}</li>
          ),
        )}
      </ul>
    </div>
  );
};

export { FilterWithPosts };
