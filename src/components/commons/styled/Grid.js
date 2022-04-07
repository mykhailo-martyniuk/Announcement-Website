import styled from '@emotion/styled';
import { tabletSize } from '../../../consts/layout';

export const GridList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -${(props) => props.margin}px;
  & > * {
    margin: ${(props) => props.margin}px;
  }
  @media (max-width: ${tabletSize}px) {
    flex-direction: column;
  }
`;
