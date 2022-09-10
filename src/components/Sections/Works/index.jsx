import Container from 'src/components/Container';
import Card from 'src/components/Projects/Card';
import Project from 'src/components/Projects/Project';
import Title from 'src/components/Title';
import { Projects, ProjectsList, Cards } from './styles';

const Works = () => {
  return (
    <Container>
      <section style={{ flexDirection: 'column', alignItems: 'start' }}>
        <Title>WORKS</Title>

        <Projects>
          <ProjectsList>
            <Project banner="netflix.jpg" alt="Netflix project banner" />
            <Project banner="spotify.jpg" alt="Spotify project banner" />
            <Project banner="omega.jpg" alt="Omega project banner" />
          </ProjectsList>

          <Cards>
            <Card></Card>
          </Cards>
        </Projects>
      </section>
    </Container>
  );
};

export default Works;
