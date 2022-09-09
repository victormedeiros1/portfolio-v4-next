import Container from 'src/components/Container';
import Logo from 'src/components/Logo';
import React from 'react';
import Button from 'src/components/Button';
import { H1, H2, Left, Right } from './styles';

const Main = () => {
  return (
    <Container>
      <main>
        <Left>
          <H1>JOSÉ VICTOR</H1>
          <H2>FRONT-END DEVELOPER</H2>
          <Button>DISCOVER</Button>
        </Left>
        <Right>
          <Logo />
        </Right>
      </main>
    </Container>
  );
};

export default Main;
