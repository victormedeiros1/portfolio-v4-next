import Image from 'next/image';
import React from 'react';
import Container from 'src/components/Container';
import H2 from 'src/components/Headings/H2';

export default function Skills() {
  return (
    <Container>
      <section style={{ display: 'flex', alignItems: 'center' }}>
        <H2 style={{ position: 'absolute', visibility: 'hidden', zIndex: '$-1' }}>
          SKILLS
        </H2>
        <Image
          width="100%"
          src="images/skills.svg"
          alt="all my skills
        "
        />
      </section>
    </Container>
  );
}
