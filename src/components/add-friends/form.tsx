import { GREEN, LIME, WHITE } from "@colors";
import styled from "styled-components";

export default function AddFriendForm() {
  return (
    <Form>
      <InputWrapper>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required />
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
