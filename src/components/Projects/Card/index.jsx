import Button from 'src/components/Button';
import Paragraph from 'src/components/Parapgraph';
import {
  CardStyles,
  CardBorderTop,
  CardBorderBottom,
  CardTitle,
  CardFooter,
  Company,
} from './styles';

const Card = ({ title, paragraphs, company, link }) => {
  return (
    <CardStyles>
      <CardBorderTop />
      <CardTitle>{title}</CardTitle>
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
};

export default Card;
