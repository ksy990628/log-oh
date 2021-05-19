import Link from "next/link";
import styled from "styled-components";

import { WHITE, GREEN } from "src/constants/colors";
import MenuIcon from "src/assets/icons/menu";

export type GlobalHeaderProps = {
  toggleSidebar: () => void;
};

export default function GlobalHeader({ toggleSidebar }: GlobalHeaderProps) {
  return (
    <Wrapper>
      <Button onClick={toggleSidebar}>
        <MenuIcon fill={WHITE} style={{ width: "2rem", height: "2rem" }} />
      </Button>
      <Link href="/" passHref>
        <A>
          <Title>Log - Oh</Title>
        </A>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.4rem 0 1.6rem;
  height: 4.8rem;
  width: 100%;
  background-color: ${GREEN};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`;

const A = styled.a`
  margin: 0 auto;
  text-decoration: none;
`;

const Title = styled.h2`
  color: ${WHITE};
  font-size: 1.4rem;
  font-weight: bold;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
