import Container from 'src/components/Container';
import Logo from 'src/components/Logo';

import Button from 'src/components/Button';
import { H1, H2, Left, Right, MainStyles } from './styles';
import { useIntl } from 'react-intl';

const Main = () => {
  const intl = useIntl();

  return (
    <Container>
      <MainStyles id="main">
        <Left>
          <H1>JOSÉ VICTOR</H1>
          <H2>{intl.formatMessage({ id: 'main_h2' })}</H2>
          <Button to="#about">{intl.formatMessage({ id: 'main_CTA' })}</Button>
        </Left>
        <Right>
          <Logo />
        </Right>
      </MainStyles>
    </Container>
  );
};

export default Main;
