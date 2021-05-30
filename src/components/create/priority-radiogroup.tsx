import styled from "styled-components";

type PriorityRadiogroupProps = {
  checkedValue: string;
  handlePriorityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PriorityRadiogroup({
  checkedValue,
  handlePriorityChange,
}: PriorityRadiogroupProps) {
  const OPTIONS = ["1", "2", "3", "4", "5"];

  const renderRadioItems = OPTIONS.map((value) => (
    <RadioWrapper key={value}>
      <RadioInput
        type="radio"
        value={value}
        id={value}
        checked={value === checkedValue}
        onChange={handlePriorityChange}
      />
      <RadioLabel htmlFor={value}>{value}</RadioLabel>
    </RadioWrapper>
  ));

  return (
    <InputGroup>
      <Label htmlFor="priority">Priority</Label>
      <RadioGroupWrapper>{renderRadioItems}</RadioGroupWrapper>
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
