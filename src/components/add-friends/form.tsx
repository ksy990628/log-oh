import { useState } from "react";
import styled from "styled-components";

import { GREEN, LIME, WHITE } from "@colors";

type FormProps = {
  reload: number;
  setReload: React.Dispatch<React.SetStateAction<number>>;
};

export default function AddFriendForm({ reload, setReload }: FormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const list = JSON.parse(localStorage.getItem("friendsList") || "[]");
    localStorage.setItem(
      "friendsList",
      JSON.stringify([...list, { name, email }])
    );
    setName("");
    setEmail("");
    alert("A new friend has been registered.");
    setReload(reload + 1);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </InputGroup>
      </InputWrapper>
      <Button type="submit">Add Friend</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${LIME};
`;

const InputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  margin: 0.5rem 0;
  width: 100%;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-right: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 75%;
  border: none;
`;

const Button = styled.button`
  border: none;
  background-color: ${GREEN};
  color: ${WHITE};
  height: 4rem;
  font-size: 1.2rem;
  margin-left: 1rem;
  border-radius: 0.6rem;
  font-weight: 500;
`;
