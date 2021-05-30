import styled from "styled-components";

type ColorSelectProps = {
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function ColorSelect({ handleColorChange }: ColorSelectProps) {
  const OPTIONS = ["red", "orange", "green", "blue", "purple", "black"];

  return (
    <InputGroup>
      <Label htmlFor="color">Color</Label>
      <Select id="color" onChange={handleColorChange}>
        {OPTIONS.map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
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
