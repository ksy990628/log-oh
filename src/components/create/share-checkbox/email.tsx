import { useState } from "react";
import styled from "styled-components";

type EmailProps = {
  value: string;
  handleEmailListChange: (email: string, isChecked: boolean) => void;
};

export default function Email({ value, handleEmailListChange }: EmailProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    handleEmailListChange(event.target.value, event.target.checked);
  };

  return (
    <CheckboxWrapper key={value}>
      <Checkbox
        type="checkbox"
        id={value}
        value={value}
        checked={isChecked}
        onChange={handleChecked}
      />
      <Label htmlFor={value}>{value}</Label>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.8rem;
`;
