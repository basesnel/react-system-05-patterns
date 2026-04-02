import { withPagination } from "../../utils/withPagination";
import { UserPosts } from "../UserPosts.tsx/UserPosts";

const PaginatedUserPosts = withPagination(UserPosts);

export { PaginatedUserPosts };
