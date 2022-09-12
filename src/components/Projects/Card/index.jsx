import Button from 'src/components/Button';
import H3 from 'src/components/Headings/H3';
import Paragraph from 'src/components/Parapgraph';
import React from 'react';
import {
  CardStyles,
  CardBorderTop,
  CardBorderBottom,
  CardFooter,
  Company,
} from './styles';

export default function Card({ title, paragraphs, company, link }) {
  return (
    <CardStyles>
      <CardBorderTop />
      <H3>{title}</H3>
      {paragraphs.map(({ id, paragraph }) => (
        <Paragraph key={id}>{paragraph}</Paragraph>
      ))}
      <CardFooter>
        <Button to={link} target="_blank">
          VISITAR
        </Button>
        <Company>{company}</Company>
      </CardFooter>
      <CardBorderBottom />
    </CardStyles>
  );
}
