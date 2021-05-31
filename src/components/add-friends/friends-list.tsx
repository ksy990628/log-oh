import Profile from "./friend-profile";

export default function FriendsList() {
  const FRIENDS_EXAMPLE = [
    { name: "example", email: "example@example.com" },
    { name: "example", email: "example@example.com" },
    { name: "example", email: "example@example.com" },
    { name: "example", email: "example@example.com" },
    { name: "example", email: "example@example.com" },
  ];

  return (
    <>
      {FRIENDS_EXAMPLE.map((item) => (
        <Profile key={item.email} name={item.name} email={item.email} />
      ))}
    </>
  );
}
