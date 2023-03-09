import React from 'react';

import Contact from '../components/Contact';
import HeroContact from '../assets/hero-contact.svg';
import Title from '../components/common/Title';
import SectionContainer from '../components/common/SectionContainer';

import styled from 'styled-components';

const Subtitle = styled.h3`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const SvgContainer = styled.div`
  height: 470px;
  width: 470px;
  @media (max-width: 768px) {
    height: 220px;
    width: 220px;
  }
`;

const ContactUs = () => {
  return (
    <SectionContainer id="contact-us">
      <Title>Do not hesitate to ask a question!</Title>

      <Flex>
        <div>
          <Subtitle>Got a question for us?</Subtitle>
          <Contact />
        </div>

        <SvgContainer>
          <HeroContact height="100%" width="100%" />
        </SvgContainer>
      </Flex>
    </SectionContainer>
  );
};

export default ContactUs;
