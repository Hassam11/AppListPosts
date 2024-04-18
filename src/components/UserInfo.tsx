import { IUser } from "../model";
import { GoPerson } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { LiaCitySolid } from "react-icons/lia";

import "./styles.css";
import { CgWebsite } from "react-icons/cg";
import { GiModernCity } from "react-icons/gi";

export default function UserInfo({ user }: { user?: IUser }) {
  return (
    <div className="cardContainer">
      <h2 className="username">{user?.username}</h2>
      <p>
        <GoPerson />
        {user?.name}
      </p>
      <p>
        <MdOutlineMail />
        {user?.email}
      </p>
      <p>
        <GiModernCity />
        {user?.address?.city}
      </p>
      <p>
        <LiaCitySolid />
        {user?.company?.name}
      </p>
      <p>
        <MdOutlinePhone />
        {user?.phone}
      </p>
      <p>
        <CgWebsite />
        {user?.website}
      </p>
    </div>
  );
}
