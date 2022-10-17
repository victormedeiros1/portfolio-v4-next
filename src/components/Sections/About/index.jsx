import React from 'react';
import Container from 'src/components/Container';
import Paragraph from 'src/components/Paragraph';
import H2 from 'src/components/Headings/H2';
import H3 from 'src/components/Headings/H3';
import { Left, Right, ProfilePicture } from './styles';
import { useIntl } from 'react-intl';

export default function About() {
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
          <ProfilePicture
            src="/images/profile-picture.png"
            alt="Profile picture
          "
          />
        </Right>
      </section>
    </Container>
  );
}
