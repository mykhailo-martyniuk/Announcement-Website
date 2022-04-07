/** @jsxImportSource @emotion/react */

import React from 'react';
import { useSelector } from 'react-redux';
import AnnouncementCard from '../../components/AnnouncementCard/AnnouncementCard';
import { Container } from '../../components/commons/styled/Container';
import { GridList } from '../../components/commons/styled/Grid';
import { PageTitle } from '../../components/commons/styled/PageTitle';
import { Section } from '../../components/commons/styled/Section';
import useAnnouncementActions from '../../hooks/useAnnouncementActions';

const HomePage = () => {
  const announcements = useSelector((state) => state.announcements.data);
  const {
    onClickAnnouncementHandler,
    onClickDeleteHandler,
    onClickEditHandler,
  } = useAnnouncementActions();
  return (
    <>
      <Section>
        <Container>
          <PageTitle>All Announcements</PageTitle>
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

export default HomePage;
