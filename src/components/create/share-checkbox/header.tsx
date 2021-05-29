import styled, { css } from "styled-components";

import Up from "src/assets/icons/chevron/up";
import Down from "src/assets/icons/chevron/down";
import { GREEN, WHITE } from "@colors";

type HeaderProps = {
  title: string;
  isOpened: boolean;
  toggleOpened: () => void;
};

export default function Header({ title, isOpened, toggleOpened }: HeaderProps) {
  return (
    <StyledHeader isOpened={isOpened}>
      {isOpened ? (
        <ChevronButton onClick={toggleOpened}>
          <Up style={{ width: "3.6rem", height: "3.6rem" }} fill={WHITE} />
        </ChevronButton>
      ) : (
        <ChevronButton onClick={toggleOpened}>
          <Down style={{ width: "3.6rem", height: "3.6rem" }} fill={WHITE} />
        </ChevronButton>
      )}
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  background-color: ${GREEN};
  border: 0.2rem solid ${GREEN};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  ${(props: { isOpened: boolean }) => css`
    border-bottom-right-radius: ${props.isOpened ? 0 : "1rem"};
    border-bottom-left-radius: ${props.isOpened ? 0 : "1rem"};
  `}
`;

const ChevronButton = styled.button`
  background-color: transparent;
  border: none;
`;

const StyledH1 = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${WHITE};
`;
