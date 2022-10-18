import Container from 'src/components/Container';
import H2 from 'src/components/Headings/H2';
import SocialMedias from './components/SocialMedias';
import { ContactLink, Left, Right, Footer } from './styles';

const Contact = () => (
  <Container>
    <Footer id="contact">
      <Left>
        <H2 reverseBar="reverse">CONTACT</H2>
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
    </Footer>
  </Container>
);
export default Contact;
