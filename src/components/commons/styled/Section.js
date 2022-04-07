import styled from '@emotion/styled';
import { grey } from '../../../consts/colors';
import { tabletSize } from '../../../consts/layout';

export const Section = styled.section`
  padding: 40px 0;
  background-color: ${grey};
  @media (max-width: ${tabletSize}px) {
    padding: 80px 10px;
  }
`;
