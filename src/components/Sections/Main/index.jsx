import Container from 'src/components/Container';
import Logo from 'src/components/Logo';
import React from 'react';
import Button from 'src/components/Button';
import { H1, H2, Left, Right, MainStyles } from './styles';

export default function Main() {
  return (
    <Container>
      <MainStyles>
        <Left>
          <H1>JOSÉ VICTOR</H1>
          <H2>FRONT-END DEVELOPER</H2>
          <Button>DISCOVER</Button>
        </Left>
        <Right>
          <Logo />
        </Right>
      </MainStyles>
    </Container>
  );
}
