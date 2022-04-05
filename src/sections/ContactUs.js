import React from 'react'

import Contact from '../components/Contact';
import HeroContact from '../assets/hero-contact.svg';

import styled from 'styled-components';

const Title = styled.h1`
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 80px;
line-height: 88px;
`

const Subtitle = styled.h2`
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
`

const Flex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const ContactUs = () => {

  return (
    <div>

      <Title>Do not hesitate to ask a question!</Title>

      <Flex>

        <div>
          <Subtitle>Got a question for us?</Subtitle>
          <Contact />
        </div>

        <div>
          <HeroContact height={470} width={470} />
        </div>
      </Flex>


    </div>
  );
};

export default ContactUs;