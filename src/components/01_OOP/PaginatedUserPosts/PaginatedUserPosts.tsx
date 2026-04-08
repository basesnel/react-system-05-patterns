import { withPagination } from "../../../utils/withPagination";
import { UserPostsV02 } from "../UserPostsV02/UserPostsV02";

const PaginatedUserPosts = withPagination(UserPostsV02);

export { PaginatedUserPosts };
