/** @jsxImportSource @emotion/react */

import React from 'react';
import { Container } from '../../components/commons/styled/Container';
import { useParams } from 'react-router';
import AnnouncementForm from '../../components/AnnouncementForm/AnnouncementForm';
import { useSelector } from 'react-redux';
import { Section } from '../../components/commons/styled/Section';
import { PageTitle } from '../../components/commons/styled/PageTitle';
import { jsx, css } from '@emotion/react';

const EditPage = () => {
  const { id } = useParams();

  const announcement = useSelector((state) =>
    state.announcements.data.find((el) => el.id.toString() === id)
  );
  const announcements = useSelector((state) => state.announcements.data);

  return (
    <>
      <Section>
        <Container>
          <PageTitle>Edit</PageTitle>
          <AnnouncementForm
            title={announcement?.title}
            description={announcement?.description}
            id={id}
            dateAdded={announcement?.dateAdded}
          />
        </Container>
      </Section>
    </>
  );
};

export default EditPage;
