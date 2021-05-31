import { useState, useEffect } from "react";
import AddFriendForm from "./form";
import FriendsList from "./friends-list";
import UserProfile from "./user-profile";

export default function AddFriendsComponents() {
  const [list, setList] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("friendsList") || "[]");
    setList(data);
  }, [reload]);

  return (
    <>
      <UserProfile />
      <AddFriendForm reload={reload} setReload={setReload} />
      <FriendsList list={list} />
    </>
  );
}
