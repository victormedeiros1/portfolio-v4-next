import React from 'react';
import Container from 'src/components/Container';
import Paragraph from 'src/components/Parapgraph';
import Subtitle from 'src/components/Subtitle';
import Title from 'src/components/Title';
import { Left, Right } from './styles';

const About = () => {
  return (
    <Container>
      <section>
        <Left>
          <Title>ABOUT ME</Title>
          <Subtitle>Nice to meet you!</Subtitle>
          <Paragraph>
            I started programming in 2017 and graduated as a Computer Technician at the
            IFRN. I liked to program, it was an interesting challenge, but I took a real
            rush when I got to the web development part.
          </Paragraph>
          <Paragraph>
            When I got to know the front-end and saw the infinite sea of possibilities, I
            fell in love, I always liked the visual and creative side of things, so I
            started to interact with the community, working as a team, meeting and
            exchanging knowledge with new people. essential.
          </Paragraph>
          <Paragraph>
            Today, I'm studying Information Systems at UFRN. I want to be a great
            developer and I am every day studying and striving more and more to become
            one.
          </Paragraph>
        </Left>
        <Right>
          <img
            src="/images/profile-picture.png"
            alt="Profile picture
          "
          />
        </Right>
      </section>
    </Container>
  );
};

export default About;
