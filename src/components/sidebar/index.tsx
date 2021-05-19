import styled from "styled-components";

import XIcon from "src/assets/icons/x";
import HomeIcon from "src/assets/icons/home";
import CalendarIcon from "src/assets/icons/calendar";
import UserPlusIcon from "src/assets/icons/user-plus";
import { BLACK, GREEN } from "@colors";
import Menu from "./menu";

export type SidebarProps = {
  toggleSidebar: () => void;
};

export default function Sidebar({ toggleSidebar }: SidebarProps) {
  const style = { width: "2rem", height: "2rem" };

  return (
    <Wrapper>
      <XButton onClick={toggleSidebar}>
        <XIcon style={{ width: "2.4rem", height: "2.4rem" }} fill={GREEN} />
      </XButton>
      <Menu
        Icon={<HomeIcon style={style} fill={BLACK} />}
        link="/"
        text="Home"
      />
      <Menu
        Icon={<CalendarIcon style={style} fill={BLACK} />}
        link="/calendar"
        text="Calendar"
      />
      <Menu
        Icon={<UserPlusIcon style={style} fill={BLACK} />}
        link="/friends"
        text="Add friends"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
`;

const XButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 1.6rem 0;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
