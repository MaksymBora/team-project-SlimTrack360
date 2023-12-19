import { theme } from '../../styles/theme';
import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 300px;
  padding-top: 16px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 834px) {
    max-width: 800px;
    padding: 24px 10px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    max-width: 1372px;
    padding: 20px 10px;
  }
`;
export const InnerWrap = styled.div`
  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    column-gap: 44px;
  }
`;
