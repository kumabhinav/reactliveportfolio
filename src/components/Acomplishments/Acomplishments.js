import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Third year Academic topper.'},
  { number: 2, text: 'Letter of Appreciations', },
  { number: 3, text: 'Courses', },
  { number: 4, text: 'Scholorship during First Year', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <SectionText> I'm Glad to share my Achievements with you </SectionText>
    <Boxes>
      {data.map((card, index)=> (
        <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
