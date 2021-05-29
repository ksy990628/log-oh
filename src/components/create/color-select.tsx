import styled from "styled-components";

export default function ColorSelect() {
  return (
    <InputGroup>
      <Label htmlFor="color">Color</Label>
      <Select id="color">
        <Option value="red">red</Option>
        <Option value="orange">orange</Option>
        <Option value="yellow">yellow</Option>
        <Option value="green">green</Option>
        <Option value="blue">blue</Option>
        <Option value="grey">grey</Option>
      </Select>
    </InputGroup>
  );
}

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
`;

const Select = styled.select`
  font-size: 1.5rem;
  width: 70%;
`;

const Option = styled.option``;
