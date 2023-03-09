import * as React from 'react';
//import { Scrollchor } from 'react-scrollchor';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Main from '../sections/Main';
import AboutUs from '../sections/AboutUs';
import OurFriends from '../sections/OurFriends';
import ForCompanies from '../sections/ForCompanies';
import Faq from '../sections/Faq';
import ContactUs from '../sections/ContactUs';
import GlobalStyle from '../components/globalStyle';

import { graphql } from 'gatsby';

const ContentSpacer = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`;

const IndexPage = ({ data }) => {
  const sections = data.allContentfulSection.nodes;

  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Navigation sections={sections} />
      <ContentSpacer>
        <Grid container spacing={2}>
          <Main />
          <AboutUs />
          <OurFriends />
          <ForCompanies />
          <Faq />
          <ContactUs />
        </Grid>
      </ContentSpacer>
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allContentfulSection(sort: { order: ASC, fields: order }) {
      nodes {
        name
        order
        slug
      }
    }
  }
`;
