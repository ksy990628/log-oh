import Link from "next/link";
import styled from "styled-components";

type MenuProps = {
  Icon: JSX.Element;
  link: string;
  text: string;
};

export default function Menu({ Icon, link, text }: MenuProps) {
  return (
    <Link href={link}>
      <StyledA>
        {Icon}
        <Text>{text}</Text>
      </StyledA>
    </Link>
  );
}

const StyledA = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0.8rem 0;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  padding-left: 0.6rem;
`;
