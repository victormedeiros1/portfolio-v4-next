import Button from 'src/components/Button';
import H3 from 'src/components/Headings/H3';
import Paragraph from 'src/components/Paragraph';
import React from 'react';
import {
  CardStyles,
  CardBorderTop,
  CardBorderBottom,
  CardFooter,
  Company,
} from './styles';
import { useIntl } from 'react-intl';

const Card = ({ title, paragraphs, company, link }) => {
  const intl = useIntl();

  return (
    <CardStyles>
      <CardBorderTop />
      <H3>{title}</H3>
      {paragraphs.map(({ id, paragraph }) => (
        <Paragraph key={id}>{paragraph}</Paragraph>
      ))}
      <CardFooter>
        <Button to={link} target="_blank">
          {intl.formatMessage({ id: 'works_CTA' })}
        </Button>
        <Company>{company}</Company>
      </CardFooter>
      <CardBorderBottom />
    </CardStyles>
  );
};

export default Card;
