import { useEffect, useState } from "react";
import { getPostById, getUserById } from "./api/api";
import { IPost } from "./model/Post.interface";
import { IUser } from "./model/User.interface";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState<IUser>({});

  const handleClick = async () => {
    const numero = Math.floor(Math.random() * 10) + 1;
    const responsePost = await getPostById(numero);
    const responseUser = await getUserById(numero);
    setData(responsePost);
    setUser(responseUser);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <span>{user.name}</span>
      {data.map((post: IPost) => (
        <div key={post.id}>
          <p>{post.postId}</p>
          <p>{post.name}</p>
          <span>{post.email}</span>
        </div>
      ))}
    </>
  );
}

export default App;
