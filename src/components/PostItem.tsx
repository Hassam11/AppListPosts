export default function PostItem({ post }) {
  return (
    <div className="post" key={post.id}>
      <p>{post.name}</p>
      <span>{post.email}</span>
      <span>{post.body}</span>
    </div>
  );
}
