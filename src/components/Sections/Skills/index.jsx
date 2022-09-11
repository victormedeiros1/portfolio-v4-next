import React from 'react';
import Container from 'src/components/Container';
import H2 from 'src/components/Headings/H2';

const Skills = () => {
  return (
    <Container>
      <section>
        <H2 style={{ position: 'absolute', visibility: 'hidden', zIndex: '$-1' }}>
          SKILLS
        </H2>
        <img src="images/skills.svg" />
      </section>
    </Container>
  );
};

export default Skills;
