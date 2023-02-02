import React from 'react';

import Title from '../components/Title';
import Hero1 from '../assets/hero-about-1.svg';
import Hero2 from '../assets/hero-about-2.svg';
import Hero3 from '../assets/hero-about-3.svg';

const AboutUs = () => (
  <section id="about-us">
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
  </section>
);

export default AboutUs;
