/** @jsxImportSource @emotion/react */

import React from 'react';
import { jsx, css } from '@emotion/react';
import { buttonIconBaseStyle } from './styles';

const ButtonIcon = ({ onClick = () => {}, styles, icon, disabled }) => {
  const style = css`
    ${buttonIconBaseStyle};
    ${styles}
  `;
  return (
    <>
      <i onClick={onClick} css={style} className={'bx ' + icon}></i>
    </>
  );
};

export default ButtonIcon;
