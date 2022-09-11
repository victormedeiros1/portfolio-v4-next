import React from 'react';
import Container from 'src/components/Container';
import H2 from 'src/components/Headings/H2';
import SocialMedias from './components/SocialMedias';
import { ContactLink, Left, Right } from './styles';

const Contact = () => {
  return (
    <Container>
      <footer>
        <Left>
          <H2>CONTACT</H2>
          <ContactLink href="mailto:josevictordev@gmail.com">
            <span>LET'S</span>
            <span>BUILD</span>
            <span>SOMETHING</span>
            <span>TOGETHER?</span>
          </ContactLink>
        </Left>
        <Right>
          <SocialMedias />
        </Right>
      </footer>
    </Container>
  );
};

export default Contact;
