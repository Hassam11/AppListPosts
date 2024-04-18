import { useEffect, useState } from "react";
import { getPostById, getUserById } from "./api/api";
import { IPost, IUser } from "./model";
import UserInfo from "./components/UserInfo";

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
      <UserInfo user={user} />
      {/* {data.map((post: IPost) => (
        <div key={post.id}>
          <p>{post.postId}</p>
          <p>{post.name}</p>
          <span>{post.email}</span>
        </div>
      ))} */}
    </>
  );
}

export default App;
