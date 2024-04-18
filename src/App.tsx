import { useEffect, useState } from "react";
import { getPostById, getUserById } from "./api/api";
import { IUser } from "./model";
import { PostList, UserInfo } from "./components";

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
      <UserInfo user={user} />
      <button onClick={handleClick} className="button">
        Click
      </button>
      <PostList data={data} />
    </>
  );
}

export default App;
