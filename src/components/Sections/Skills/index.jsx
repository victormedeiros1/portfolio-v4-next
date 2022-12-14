import Image from 'next/image';

import { useIntl } from 'react-intl';
import Container from 'src/components/Container';
import { Title } from './styles';

const Skills = () => {
  const intl = useIntl();
  return (
    <Container>
      <section
        id="skills"
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          height: 'fit-content',
        }}
      >
        <Title>{intl.formatMessage({ id: 'skills_title' })}</Title>
        <Image
          width={732}
          height={732}
          src="/images/skills.svg"
          alt="all my skills
        "
        />
      </section>
    </Container>
  );
};

export default Skills;
