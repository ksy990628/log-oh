import Link from "next/link";
import styled from "styled-components";

import PlusIcon from "src/assets/icons/plus";
import { GREEN, WHITE } from "@colors";

export default function PlusButton() {
  return (
    <Link href="/create" passHref>
      <A>
        <CircleButton>
          <PlusIcon style={{ width: "2rem", height: "2rem" }} fill={WHITE} />
        </CircleButton>
      </A>
    </Link>
  );
}

const A = styled.a``;

const CircleButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: ${GREEN};
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px;
`;
