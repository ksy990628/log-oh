import styled from "styled-components";

export default function PriorityRadiogroup() {
  const OPTIONS = ["1", "2", "3", "4", "5"];

  const RadioItem = (value) => (
    <RadioWrapper key={value}>
      <RadioInput
        type="radio"
        value={value}
        id={value}
        defaultChecked={value === "1"}
      />
      <RadioLabel htmlFor={value}>{value}</RadioLabel>
    </RadioWrapper>
  );

  return (
    <InputGroup>
      <Label htmlFor="priority">Priority</Label>
      <RadioGroupWrapper>
        {OPTIONS.map((value) => RadioItem(value))}
      </RadioGroupWrapper>
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

const RadioGroupWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const RadioInput = styled.input``;

const RadioLabel = styled.label`
  font-size: 1.5rem;
  margin-left: 0.4rem;
`;
