/** @jsxImportSource @emotion/react */

import React from 'react';
import { jsx, css } from '@emotion/react';
import { buttonBaseStyle } from './styles';

const Button = ({ onClick = () => {}, styles, children, type, disabled }) => {
  const style = css`
    ${buttonBaseStyle}
    ${styles}
  `;
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        css={style}
        onClick={(e) => onClick(e)}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
