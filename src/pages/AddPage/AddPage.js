/** @jsxImportSource @emotion/react */

import React from 'react';
import { Container } from '../../components/commons/styled/Container';
import AnnouncementForm from '../../components/AnnouncementForm/AnnouncementForm';
import { Section } from '../../components/commons/styled/Section';
import { PageTitle } from '../../components/commons/styled/PageTitle';

const AddPage = () => {
  return (
    <>
      <Section>
        <Container>
          <PageTitle>New Announcement</PageTitle>
          <AnnouncementForm />
        </Container>
      </Section>
    </>
  );
};

export default AddPage;
