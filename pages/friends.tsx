import Layout from "src/layouts";
import UserProfile from "src/components/add-friends/user-profile";
import FriendsList from "src/components/add-friends/friends-list";

export default function Calendar() {
  return (
    <Layout>
      <UserProfile />
      <FriendsList />
    </Layout>
  );
}
