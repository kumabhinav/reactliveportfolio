import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
 <LeftSection>
   <SectionTitle main centre>
     Welcome to <br/>
     My Portfolio
   </SectionTitle>
   <SectionText>
   I would like to be a part of a growth-oriented organization where my knowledge and skills are recognized. I wish to work in an environment that will allow me the opportunity for personal and professional development, where I can utilize my experience to contribute for the growth of the organization. As for me a career with an organisation where there is an ample scope of self assessment both individual & organizational improvement through skill based work style as a team. To pursue a challenging career and want to associate myself with an organization that offers a congenial environment for growth 
   </SectionText>
   <Button  onClick={()=> window.location = 'https://google.com'} >Learn More</Button>
 </LeftSection>

 </Section>
);

export default Hero;