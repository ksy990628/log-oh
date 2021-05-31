import styled from "styled-components";

type FilterProps = {
  handleSortingChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Filter({ handleSortingChange }: FilterProps) {
  return (
    <Select onChange={handleSortingChange}>
      <Option value="highPriority">High Priority</Option>
      <Option value="lowPriority">Low Priority</Option>
      <Option value="earlyDeadline">Early Deadline </Option>
      <Option value="lateDeadline">Late Deadline</Option>
    </Select>
  );
}

const Select = styled.select`
  font-size: 1.2rem;
  padding: 0 0.4rem;
`;

const Option = styled.option``;
