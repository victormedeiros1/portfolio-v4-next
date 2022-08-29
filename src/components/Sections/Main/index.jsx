import Container from 'src/components/Container';
import Logo from 'src/components/Logo';
import Section from 'src/components/Section';

export default function Main() {
  return (
    <Container>
      <Section>
        <div className="content">
          <h1>JOSÉ VICTOR</h1>
        </div>
        <div className="left">
          <Logo />
        </div>
      </Section>
    </Container>
  );
}
