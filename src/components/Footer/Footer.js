import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:7573800698">7573800698</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>EMail</LinkTitle>
          <LinkItem href="mailto:sanskritikashyap15805@gmail.com">sanskritikashyap15805@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“There is no greater tyranny than that which is perpetrated under the shield of the law and in the name of justice.”
         <br/> - Montesquieu</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://www.facebook.com/aadhya.aloki">
          <AiFillFacebook size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/sanskriti-kashyap-8707801ab/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.instagram.com/_storm_2614/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
