/** @jsxImportSource @emotion/react */

import React from 'react';
import 'boxicons';
import {
  iconBaseStyle,
  inputBaseStyle,
  spanStyle,
  textareaBaseStyle,
} from './styles';
import { jsx, css } from '@emotion/react';

const inputTypes = {
  email: 'email',
  number: 'number',
  password: 'password',
  tel: 'tel',
  text: 'text',
  textarea: 'textarea',
};

const TextInput = ({
  color = '',
  icon = '',
  id = '',
  name = '',
  placeholder = '',
  label = '',
  value = '',
  type = '',
  styles,
  error,
  onChange = () => {},
  onEnter = () => {},
  ...props
}) => {
  const inputStyle = css`
    ${inputBaseStyle};
    ${icon ? `padding: 8px 16px 8px 28px` : ''};
    height: 48px;
    border-color: ${color};
    ${styles}
  `;

  const textareaStyle = css`
    ${inputBaseStyle};
    ${textareaBaseStyle};
    ${styles};
  `;

  const iconStyle = css`
    ${iconBaseStyle};
    color: ${color};
  `;

  if (!inputTypes[type] && type !== '') throw new Error('invalid input type');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  if (inputTypes.textarea === type)
    return (
      <>
        <textarea
          css={textareaStyle}
          value={value}
          placeholder={placeholder}
          label={label}
          name={name}
          id={id}
          onChange={(e) => onChange(e)}
          onKeyDown={handleKeyDown}
        />
      </>
    );
  else
    return (
      <>
        <span css={spanStyle}>
          {icon && <i className={'bx ' + icon} css={iconStyle}></i>}
          <input
            css={inputStyle}
            type={type ? type : 'text'}
            value={value}
            placeholder={placeholder}
            label={label}
            name={name}
            id={id}
            onChange={(e) => onChange(e)}
            onKeyDown={handleKeyDown}
          />
        </span>
      </>
    );
};

export default TextInput;
