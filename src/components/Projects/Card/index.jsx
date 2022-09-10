import Button from 'src/components/Button';
import Paragraph from 'src/components/Parapgraph';
import {
  CardStyles,
  CardBorderTop,
  CardBorderBottom,
  CardTitle,
  CardFooter,
  WorkTime,
} from './styles';

const Card = () => {
  return (
    <CardStyles>
      <CardBorderTop />
      <CardTitle>NETFLIX TUDUM</CardTitle>
      <Paragraph>
        Tudum is an international event that announces several news about Netflix
        projects. In 2021, the 3rd edition took place to celebrate 10 years of Netflix in
        Brazil. Almanac Tudum was launched together with the event, it is a book with
        exclusive material about the company's productions.
      </Paragraph>
      <Paragraph>
        Hox.rs was responsible for implementing a shorter “virtual version” of Almanac
        Tudum. Through Figma we had access to the project screens and started development.
        I worked as a front-end developer creating the code for most of the site's pages.
      </Paragraph>
      <Paragraph>
        As it was my first time working in a company, I couldn't believe the moment I saw
        who the project was for. When I entered Figma and saw that someone from Netflix
        was working there “on my side”, the feeling was of euphoria.
      </Paragraph>
      <Paragraph>
        Working together with a team of developers, learning from them and creating
        something for such a big name was wonderful.
      </Paragraph>
      <Paragraph>
        Of all the projects I've participated so far, this is without a doubt the one I
        love the most, because it was where it all started and where I was sure it was in
        this world that I wanted to work.
      </Paragraph>
      <CardFooter>
        <Button>VISITAR</Button>
        <WorkTime>HOX.rs - 2021</WorkTime>
      </CardFooter>
      <CardBorderBottom />
    </CardStyles>
  );
};

export default Card;
