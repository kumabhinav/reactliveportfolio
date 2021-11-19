import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:"20" }}>
            <DiCssdeck size="4rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Published</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#tech">
            <NavLink>Experience</NavLink>
          </Link>
        </li>

        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>


      </Div2>

      <Div3>
<SocialIcons href="https://www.facebook.com/aadhya.aloki">
  <AiFillFacebook size="3rem"/>
</SocialIcons>

<SocialIcons href="https://www.linkedin.com/in/sanskriti-kashyap-8707801ab/">
  <AiFillLinkedin size="3rem"/>
</SocialIcons>

<SocialIcons href="https://www.instagram.com/_storm_2614/">
  <AiFillInstagram size="3rem"/>
</SocialIcons>



      </Div3>
    </Container>
  </div>
);

export default Header;
