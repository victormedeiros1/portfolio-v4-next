import Container from 'src/components/Container';
import Logo from 'src/components/Logo';

import { H1, H2, Left, Right } from './styles';

export default function Main() {
  return (
    <Container>
      <header>
        <Left>
          <H1>JOSÉ VICTOR</H1>
          <H2>FRONT-END DEVELOPER</H2>
        </Left>
        <Right>
          <Logo />
        </Right>
      </header>
    </Container>
  );
}
