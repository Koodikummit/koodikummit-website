import React from 'react';

import SectionContainer from '../components/common/SectionContainer';
import Hero from '../assets/hero-main.svg';
import styled from 'styled-components';

const Subtitle = styled.h1`
  font-family: 'Krona One', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  margin: 50px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: 'Krona One', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 125px;
  line-height: 125px;
  margin: 20px;
`;

const Main = () => (
  <SectionContainer id="main">
    <Subtitle>Welcome to</Subtitle>
    <HeroTitle>Koodikummit</HeroTitle>
    <Hero />
  </SectionContainer>
);

export default Main;
