import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';


import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <GiMuscleUp size="6rem" />
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Bishoy-Samwel'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/bishoy-samwuel-ss'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://angel.co/u/bishoy-samwel'>
        <FaAngellist size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
