import { theme } from '../../../styles/theme';
import styled from 'styled-components';

export const Picture = styled.img`
  margin-bottom: 24px;

  @media screen and (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 380px;
    max-height: 396px;
  }

  @media screen and (min-width: ${theme.breakpoint.desktop}) {
    margin-bottom: 0px;
    max-width: 536px;
    max-height: 560px;
  }
`;
