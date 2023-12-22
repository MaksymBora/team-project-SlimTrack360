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
    display: block;
    content: '';
    background-image: url('/icons/unchecked.svg');
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
  }

  &:checked::before {
    display: block;
    content: ' ';
    background-image: url('/icons/checked.svg');
    background-size: 12px 12px;
    height: 12px;
    width: 12px;
  }
`;

export { RadioLi, RadioButton };
