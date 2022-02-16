import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My goal is to add more value to the team I belong to using clean code.
      </SectionText>
      <Button onClick={() => window.location = '//'}>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;