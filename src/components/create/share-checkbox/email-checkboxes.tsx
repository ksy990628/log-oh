import styled from "styled-components";

export default function EmailCheckboxes() {
  const EMAILS = [
    "example1@example.com",
    "example2@example.com",
    "example3@example.com",
    "example4@example.com",
  ];

  return (
    <ContentWrapper>
      {EMAILS.map((value) => (
        <CheckboxWrapper key={value}>
          <Checkbox type="checkbox" id={value} value={value} />
          <Label htmlFor={value}>{value}</Label>
        </CheckboxWrapper>
      ))}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  width: 100%;
  max-height: 20em;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;
  padding: 5rem 1.6rem 0.4rem 1.6rem;
`;

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
