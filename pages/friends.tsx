import Layout from "src/layouts";
import UserProfile from "src/components/add-friends/user-profile";
import AddFriendForm from "src/components/add-friends/form";
import FriendsList from "src/components/add-friends/friends-list";

export default function Calendar() {
  return (
    <Layout>
      <UserProfile />
      <AddFriendForm />
      <FriendsList />
    </Layout>
  );
}
