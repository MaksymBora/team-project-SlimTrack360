import styled from 'styled-components';

const RadioLi = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
    line-height: 1.4;
    cursor: pointer;
  }
`;

const RadioButton = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;
  cursor: pointer;

  &::before {
    content: url('../../../assets/images/settings/unchecked.svg');
  }

  &:checked::before {
    content: url('../../../assets/images/settings/checked.svg');
  }
`;

export { RadioLi, RadioButton };
