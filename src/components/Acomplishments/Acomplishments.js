import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Times Innotech Winner' },
  { number: 2, text: '⭐ CodeChef Rating' },
  { number: 1500, text: 'LeetCode Rating' },
  { text: 'Gold Badge on HackerRank' } // No number required
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {card.number ? (
            <BoxNum>{`${card.number.toLocaleString('en-IN')}+`}</BoxNum>
          ) : null}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
