import React from 'react';
import { DiFirebase, DiReact, DiRubyRough, DiVisualstudio  } from 'react-icons/di';
import { SiRubyonrails } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BackendLogos, FrontendLogos, ToolsLogos } from '../../constants/constants';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main> Technologies </SectionTitle>
    <SectionText>

    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
          <>
              {FrontendLogos.map((logo) => (
                <a target={logo.a.target} rel={logo.a.rel} href={logo.href}>
                  <img
                    alt={logo.img.a}
                    src={logo.img.src}
                  />
                </a>
              )
              )}
            </>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRubyRough size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            <>
              {BackendLogos.map((logo) => (
                <a target={logo.a.target} rel={logo.a.rel} href={logo.href}>
                  <img
                    alt={logo.img.a}
                    src={logo.img.src}
                  />
                </a>
              )
              )}
            </>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiVisualstudio size="3rem" />
        <ListContainer>
          <ListTitle>Tools & Software</ListTitle>
          <ListParagraph>
          <>
              {ToolsLogos.map((logo) => (
                <a target={logo.a.target} rel={logo.a.rel} href={logo.href}>
                  <img
                    alt={logo.img.a}
                    src={logo.img.src}
                  />
                </a>
              )
              )}
            </>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
