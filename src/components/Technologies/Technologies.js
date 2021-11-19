import React from 'react';
import { AiFillSafetyCertificate, AiOutlineProject, AiOutlineSafetyCertificate, AiTwotoneBook, AiTwotoneSafetyCertificate } from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { IoLogoWhatsapp, IoMdBook, IoMdCopy, IoMdHammer } from 'react-icons/io';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
 <SectionDivider/>
 <br />
 <SectionTitle>Experience</SectionTitle>
 <SectionText>
 My Experiences Includes
 </SectionText>
 <List>
   <ListItem>
     <AiOutlineProject size="3rem" />
     <ListContainer>
       <ListTitle>HIGH COURT</ListTitle>
       <ListParagraph>•	Experience of 1 month under<br/>
       Adv. Mr. Murari Narain Chaudary
       </ListParagraph>
     </ListContainer>
     </ListItem>

     <ListItem>
     <AiOutlineProject size="3rem"/>
     <ListContainer>
       <ListTitle>District Court</ListTitle>
       <ListParagraph>•	Experience of 21 days under<br/>
       Adv. Mr. Rajendra Tiwari
       </ListParagraph>
     </ListContainer>
     </ListItem>

     <ListItem>
     <AiOutlineProject size="3rem"/>
     <ListContainer>
       <ListTitle>Legal intern </ListTitle>
       <ListParagraph>• at Law Insider IN  <br/>
       • at Anant Social welfare Society  <br/>
       •Campus Ambassador at Law Cutor
       </ListParagraph>
     </ListContainer>
   </ListItem>
 </List>
 </Section>
);

export default Technologies;
