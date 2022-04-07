/** @jsxImportSource @emotion/react */

import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard';
import { Container } from '../../components/commons/styled/Container';
import { GridList } from '../../components/commons/styled/Grid';
import { useParams } from 'react-router';
import { jsx, css } from '@emotion/react';
import { PageTitle } from '../../components/commons/styled/PageTitle';
import { Section } from '../../components/commons/styled/Section';
import React from 'react';
import { useSelector } from 'react-redux';
import useAnnouncementActions from '../../hooks/useAnnouncementActions';

const FoundPage = () => {
  const { query } = useParams();
  const announcements = useSelector((state) =>
    state.announcements.data.filter((el) => el.title.includes(query))
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
          <PageTitle>Found</PageTitle>
          <GridList margin={10}>
            {announcements?.map((el) => (
              <li key={el.title + el.date}>
                <AnnouncementCard
                  title={el.title}
                  date={el.dateAdded}
                  description={el.description}
                  onClickHandler={(e) => onClickAnnouncementHandler(e, el.id)}
                  onClickDeleteHandler={(e) => onClickDeleteHandler(e, el.id)}
                  onClickEditHandler={(e) => onClickEditHandler(e, el.id)}
                />
              </li>
            ))}
          </GridList>
        </Container>
      </Section>
    </>
  );
};

export default FoundPage;
