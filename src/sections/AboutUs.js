import React from 'react';

import Title from '../components/common/Title';
import SectionContainer from '../components/common/SectionContainer';
import Hero1 from '../assets/hero-about-1.svg';
import Hero2 from '../assets/hero-about-2.svg';
import Hero3 from '../assets/hero-about-3.svg';

const AboutUs = () => (
  <SectionContainer id="about-us">
    <Title>Tell me more about Koodikummit!</Title>
    <div style={{ display: 'flex' }}>
      <div>
        <Hero1 />
      </div>
      <div>
        <Hero2 />
      </div>
      <div>
        <Hero3 />
      </div>
    </div>
  </SectionContainer>
);

export default AboutUs;
