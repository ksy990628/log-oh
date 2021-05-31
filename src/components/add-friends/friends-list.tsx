import { UserTypes } from "src/types/user";
import Profile from "./friend-profile";

type ListProps = {
  list: UserTypes[];
};

export default function FriendsList({ list }: ListProps) {
  return (
    <>
      {list.map((item) => (
        <Profile key={item.email} name={item.name} email={item.email} />
      ))}
    </>
  );
}
