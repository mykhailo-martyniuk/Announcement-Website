/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import ButtonIcon from '../commons/ButtonIcon/ButtonIcon';
import { Card } from '../commons/styled/Card';
import { tabletSize } from '../../consts/layout';

const AnnouncementCard = ({
  title = '',
  description = '',
  date = '',
  onClickHandler = () => {},
  onClickDeleteHandler,
  onClickEditHandler,
}) => {
  return (
    <>
      <Card
        css={css`
          position: relative;
          cursor: pointer;
          max-width: 300px;
          & > *:not(:last-child) {
            margin-bottom: 10px;
          }

          @media (max-width: ${tabletSize}px) {
            max-width: none;
          }
        `}
        onClick={onClickHandler}
      >
        <h4
          css={css`
            font-size: 18px;
          `}
        >
          {title}
        </h4>
        <p>{description}</p>
        <p>{date}</p>
        <div
          css={css`
            position: absolute;
            bottom: 4px;
            right: 4px;
          `}
        >
          {onClickEditHandler && (
            <ButtonIcon
              styles={css`
                margin-right: 10px;
              `}
              icon="bx-edit-alt"
              onClick={onClickEditHandler}
            />
          )}
          {onClickDeleteHandler && (
            <ButtonIcon icon="bx-trash-alt" onClick={onClickDeleteHandler} />
          )}
        </div>
      </Card>
    </>
  );
};

export default AnnouncementCard;
