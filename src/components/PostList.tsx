import { IPost } from "../model";
import PostItem from "./PostItem";

export default function PostList({ data }) {
  return (
    <div className="postContainer">
      {data.map((post: IPost) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}
