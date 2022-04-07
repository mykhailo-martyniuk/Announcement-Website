import styled from '@emotion/styled';
import { Container } from '../../commons/styled/Container';
import { darkGrey } from '../../../consts/colors';
import { tabletSize } from '../../../consts/layout';

export const HeaderStyled = styled.header`
  position: relative;
  padding: 15px 0;
  background-color: ${darkGrey};
  z-index: 100;
  @media (max-width: ${tabletSize}px) {
    width: 100%;
    position: fixed;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
