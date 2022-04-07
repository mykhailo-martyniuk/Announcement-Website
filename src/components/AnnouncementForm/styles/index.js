import { jsx, css } from '@emotion/react';
import { darkGrey, green, greenDull, orange } from '../../../consts/colors';

export const formStyle = css`
  margin: auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  & > *:nth-child(2n) {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

export const inputStyles = css`
  border: 2px solid ${darkGrey};
  width: 100%;
`;

const buttonBase = css`
  width: 100%;
  border: none;
  &:hover {
    box-shadow: 3px 3px 3px rgba(118, 120, 121, 0.19);
  }
  color: ${darkGrey};
`;

export const buttonSubmitStyles = css`
  background-color: ${green};
  &:disabled {
    background-color: ${greenDull};
    color: ${darkGrey};
  }
`;

export const buttonCancelStyles = css`
  ${buttonBase};
  background-color: ${orange};
`;
