/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import TextInput from '../commons/TextInput/TextInput';
import { darkGrey, white } from '../../consts/colors';
import Button from '../commons/Button/Button';
import { animationDuration, animationFunction } from '../../consts/animations';
import { useNavigate } from 'react-router-dom';
import { tabletSize } from '../../consts/layout';
import { HeaderContainer } from '../Header/styles';

const Menu = ({ style, buttonStyle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const pushToNewAnnouncementPage = () => navigate('/new-announcement');

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const onClickSearchHandler = () => {
    navigate(`/found-announcements/${searchQuery}`);
  };

  return (
    <>
      <ul
        css={css`
          display: flex;
          & > *:not(:last-child) {
            margin-right: 20px;
          }
          @media (max-width: ${tabletSize}px) {
            flex-direction: column;
            align-items: center;
            & > *:not(:last-child) {
              margin-bottom: 20px;
              margin-right: 0;
            }
          }
          ${style};
        `}
      >
        <li>
          <TextInput
            icon={'bx-search'}
            color={darkGrey}
            styles={css`
              width: 300px;
              background-color: ${white};
              border: none;
            `}
            placeholder="search"
            value={searchQuery}
            onChange={onChangeHandler}
            onEnter={onClickSearchHandler}
          />
        </li>
        <li>
          <Button
            onClick={onClickSearchHandler}
            styles={css`
              color: ${darkGrey};
              font-size: 16px;
              font-weight: 500;
              line-height: 1.25;
              border: 4px solid ${white};
              ${buttonStyle};
            `}
          >
            Search
          </Button>
        </li>
        <li>
          <Button
            onClick={pushToNewAnnouncementPage}
            styles={css`
              color: ${darkGrey};
              font-size: 16px;
              font-weight: 500;
              line-height: 1.25;
              border: 4px solid ${white};
              ${buttonStyle};
            `}
          >
            New Announcement
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Menu;
