import Container from 'src/components/Container';
import Paragraph from 'src/components/Paragraph';
import H2 from 'src/components/Headings/H2';
import H3 from 'src/components/Headings/H3';
import { Left, Right } from './styles';
import { useIntl } from 'react-intl';
import Image from 'next/image';

const About = () => {
  const intl = useIntl();
  return (
    <Container>
      <section id="about">
        <Left>
          <H2 reverseBar="reverse">{intl.formatMessage({ id: 'about_me_title' })}</H2>
          <H3 size="small">{intl.formatMessage({ id: 'about_me_subtitle' })}</H3>
          <Paragraph>{intl.formatMessage({ id: 'about_me_paragraph1' })}</Paragraph>
          <Paragraph>{intl.formatMessage({ id: 'about_me_paragraph2' })}</Paragraph>
          <Paragraph>{intl.formatMessage({ id: 'about_me_paragraph3' })}</Paragraph>
        </Left>
        <Right>
          <Image
            width={500}
            height={650}
            layout="responsive"
            src="/images/profile-picture.png"
            alt="Profile picture"
            quality="90"
          />
        </Right>
      </section>
    </Container>
  );
};

export default About;
