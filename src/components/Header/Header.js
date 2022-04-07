/** @jsxImportSource @emotion/react */

import React from 'react';
import Logo from '../commons/Logo/Logo';
import { HeaderContainer, HeaderStyled } from './styles';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { darkGrey, white } from '../../consts/colors';
import { animationDuration, animationFunction } from '../../consts/animations';
import { tabletSize } from '../../consts/layout';
import ButtonIcon from '../commons/ButtonIcon/ButtonIcon';
import useMediaQuery from '../../hooks/useMediaQuery';
import Menu from '../Menu/Menu';

const Header = ({ onClickMenu }) => {
  const isPhone = useMediaQuery(`(max-width: ${tabletSize}px)`);

  if (isPhone)
    return (
      <>
        <HeaderStyled>
          <HeaderContainer
            css={css`
              padding: 0 10px;
            `}
          >
            <Link to={'/'}>
              <Logo />
            </Link>
            <Link
              to={'/'}
              css={css`
                color: ${white};
                margin-left: 30px;
              `}
            >
              Home
            </Link>
            <ButtonIcon
              icon="bx-menu"
              styles={css`
                margin-left: auto;
                font-size: 34px;
                color: ${white};
              `}
              onClick={onClickMenu}
            />
          </HeaderContainer>
        </HeaderStyled>
      </>
    );
  else
    return (
      <>
        <HeaderStyled>
          <HeaderContainer>
            <Link to={'/'}>
              <Logo />
            </Link>
            <Link
              to={'/'}
              css={css`
                color: ${white};
                margin-left: 30px;
              `}
            >
              Home
            </Link>

            <Menu
              buttonStyle={css`
                transition: background-color ${animationDuration}
                    ${animationFunction},
                  color ${animationDuration} ${animationFunction};
                &:hover {
                  background-color: ${darkGrey};
                  color: ${white};
                }
              `}
              style={css`
                margin-left: auto;
              `}
            />
          </HeaderContainer>
        </HeaderStyled>
      </>
    );
};

export default Header;
