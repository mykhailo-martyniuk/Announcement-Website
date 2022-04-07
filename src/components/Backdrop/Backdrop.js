/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { darkGrey, grey } from '../../consts/colors';
import Menu from '../Menu/Menu';
import { animationDuration, animationFunction } from '../../consts/animations';

const Backdrop = ({ toggle }) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 150px 20px 0 20px;
        background-color: ${grey};
        z-index: 5;
      `}
    >
      <Menu
        buttonStyle={css`
          width: 300px;
          transition: border ${animationDuration} ${animationFunction};
          &:hover {
            border: 4px solid ${darkGrey};
          }
        `}
      />
    </div>
  );
};

export default Backdrop;
