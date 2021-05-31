import { UserTypes } from "src/types/user";
import Profile from "./friend-profile";

type ListProps = {
  list: UserTypes[];
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

export default function FriendsList({ list, reload, setReload }: ListProps) {
  return (
    <>
      {list.map((item, index) => (
        <Profile
          key={item.email}
          index={index}
          name={item.name}
          email={item.email}
          reload={reload}
          setReload={setReload}
        />
      ))}
    </>
  );
}
