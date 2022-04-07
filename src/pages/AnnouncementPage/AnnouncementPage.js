/** @jsxImportSource @emotion/react */

import React from 'react';
import { useSelector } from 'react-redux';
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard';
import { Container } from '../../components/commons/styled/Container';
import { GridList } from '../../components/commons/styled/Grid';
import { jsx, css } from '@emotion/react';
import ButtonIcon from '../../components/commons/ButtonIcon/ButtonIcon';
import { Section } from '../../components/commons/styled/Section';
import { findSimilar } from './helpers';
import { PageTitle } from '../../components/commons/styled/PageTitle';
import { Card } from '../../components/commons/styled/Card';
import useAnnouncementActions from '../../hooks/useAnnouncementActions';
import { useParams } from 'react-router';

const AnnouncementPage = () => {
  const { id } = useParams();

  const announcement = useSelector((state) =>
    state.announcements.data.find((el) => el.id.toString() === id)
  );

  const similar = useSelector((state) =>
    findSimilar(announcement, state.announcements.data).slice(0, 3)
  );

  const {
    onClickAnnouncementHandler,
    onClickDeleteHandler,
    onClickEditHandler,
  } = useAnnouncementActions();

  return (
    <>
      <Section>
        <Container>
          <PageTitle>Details</PageTitle>
          <Card
            css={css`
              margin: 0 10px;
              & > * {
                margin-top: 10px;
                margin-bottom: 10px;
              }
            `}
          >
            <p>{announcement?.title}</p>
            <p>{announcement?.description}</p>
            <p>{announcement?.dateAdded}</p>
            <div>
              <ButtonIcon
                icon="bx-edit-alt"
                onClick={(e) => onClickEditHandler(e, id)}
                styles={css`
                  margin-right: 30px;
                `}
              />
              <ButtonIcon
                icon="bx-trash-alt"
                onClick={(e) => onClickDeleteHandler(e, id)}
              />
            </div>
          </Card>
          {Boolean(similar?.length) && (
            <>
              <PageTitle
                css={css`
                  margin-top: 20px;
                  font-size: 26px;
                `}
              >
                Similar
              </PageTitle>
              <GridList
                margin={10}
                сss={css`
                  justify-content: center;
                `}
              >
                {similar?.map((el) => (
                  <li key={el.title + el.date}>
                    <AnnouncementCard
                      title={el.title}
                      date={el.dateAdded}
                      description={el.description}
                      onClickHandler={(e) =>
                        onClickAnnouncementHandler(e, el.id)
                      }
                    />
                  </li>
                ))}
              </GridList>
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default AnnouncementPage;
