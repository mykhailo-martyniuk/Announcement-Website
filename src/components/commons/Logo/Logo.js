/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { white } from '../../../consts/colors';

const Logo = () => {
  return (
    <div>
      <i
        className="bx bx-edit"
        css={css`
          font-size: 34px;
          color: ${white};
        `}
      ></i>
    </div>
  );
};

export default Logo;
