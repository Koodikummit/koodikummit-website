import React from 'react'
import { Grid } from '@mui/material';
import styled from 'styled-components';
import Title from '../components/Title';
import HeroCompanies from '../assets/hero-companies.svg';

const SvgContainer = styled.div`
height: 470px;
width: 470px;
@media (max-width: 768px) {
  height: 220px;
  width: 220px;
}
`

const ForCompanies = () => (
  <section id="for-companies">
    <Grid container spacing={2}>
      <Title>How does this affect our company?</Title>
      <Grid item sm={6}>
        Lorem ipsum
      </Grid>
      <Grid item sm={6}>
        <SvgContainer>
          <HeroCompanies height="100%" width="100%" />
        </SvgContainer>
      </Grid>
    </Grid>
  </section>
)

export default ForCompanies;