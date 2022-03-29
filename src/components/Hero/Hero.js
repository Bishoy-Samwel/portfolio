import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        Hi, I'm <br />
        Bishoy Samwel
      </SectionTitle>
      <SectionText>
        React and Rails enthusiast with a keen eye for scalability, security, simple responsive designs. 
        <br />
        I love software architecture design, chess, and ping pong.
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1kKOqsEJSorDesm8WFC0EBIF_GLEK2844/view?usp=sharing'}>
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;