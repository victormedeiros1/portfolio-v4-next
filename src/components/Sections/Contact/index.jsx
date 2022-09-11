import React from 'react';
import Button from 'src/components/Button';
import Container from 'src/components/Container';
import H2 from 'src/components/Headings/H2';
import H3 from 'src/components/Headings/H3';
import SocialMedias from './components/SocialMedias';
import { Form, Input, Left, Right } from './styles';

const Contact = () => {
  return (
    <Container>
      <footer>
        <Left>
          <H2>CONTACT</H2>
          <H3>TALK TO ME!</H3>

          <Form>
            <Input type="text" />
            <Button>SUBMIT</Button>
          </Form>
        </Left>
        <Right>
          <SocialMedias />
        </Right>
      </footer>
    </Container>
  );
};

export default Contact;
