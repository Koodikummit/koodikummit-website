import * as React from 'react';
import Grid from '@mui/material/Grid';

import Accordion from '../components/Accordion';
import Title from '../components/common/Title';
import SectionContainer from '../components/common/SectionContainer';
import Hero from '../assets/hero-faq.svg';

const list = [
  {
    title: 'Bacon',
    content:
      'Bacon ipsum dolor amet beef chuck ribeye flank cupim turkey pork loin tenderloin.',
  },
  { title: 'Meatloaf', content: 'Meatloaf flank chuck venison chislic.' },
  { title: 'Meatball', content: 'Meatball pork loin doner flank porchetta.' },
  { title: 'Beef', content: 'Meatball pork loin doner flank porchetta.' },
];

const Faq = () => {
  return (
    <SectionContainer>
      <Grid id="faq" container spacing={2}>
        <Grid item xs={8}>
          <Title> Frequently asked questions.</Title>
        </Grid>
        <Grid item xs={6}>
          <Accordion list={list} />
        </Grid>
        <Grid item xs={6}>
          <Hero />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default Faq;
