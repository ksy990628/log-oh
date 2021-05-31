import { useState } from "react";
import styled from "styled-components";

import { GREY } from "@colors";
import Icon from "src/assets/icons/search";

export default function Search(props: { setQuery: (query: string) => void }) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const doSearch = () => {
    props.setQuery(keyword);
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") doSearch();
  };

  return (
    <Wrapper>
      <Button onClick={doSearch}>
        <Icon
          style={{
            width: "1rem",
            height: "1rem",
          }}
          fill={GREY[600]}
        ></Icon>
      </Button>
      <Input
        placeholder="Search"
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleEnterPress}
      ></Input>
    </Wrapper>
  );
}

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 10rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  padding: unset;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 0.5rem 0 0;
`;

const Wrapper = styled.div`
  width: 14rem;
  border-radius: 2rem;
  background-color: ${GREY[300]};
  align-items: center;
  border: 1.2px solid ${GREY[500]};
  padding: 0.4rem 0.8rem;
  display: flex;
  flex-direction: row;
`;
