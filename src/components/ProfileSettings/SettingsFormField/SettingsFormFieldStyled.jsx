import styled from 'styled-components';

const ErrorText = styled.p`
  font-size: 12px;
  line-height: 1.17;
  color: #e74a3b;
  padding-left: 10px;
`;

const FormInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FormInput = styled.input.attrs((props) => ({
  $error: props.$error || false,
}))`
  padding: 8px 10px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid ${(p) => (p.$error ? '#E74A3B' : p.theme.color.primaryGrey)};
  color: ${(p) => p.theme.color.primaryWhite};
  transition: all ${(p) => p.theme.transition.main};
  outline: none;
  width: 100%;

  font-size: 14px;
  line-height: 1.4;

  &:hover,
  &:focus {
    border: 1px solid
      ${(p) => (p.$error ? '#E74A3B' : p.theme.color.primaryGreenLite)};
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
  }
`;

export { ErrorText, FormInputWrap, FormInput };
