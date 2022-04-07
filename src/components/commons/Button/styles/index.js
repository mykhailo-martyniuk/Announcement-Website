import { jsx, css } from '@emotion/react';

export const buttonBaseStyle = css`
  height: 48px;
  display: block;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    color: grey;
    cursor: auto;
  }
`;
