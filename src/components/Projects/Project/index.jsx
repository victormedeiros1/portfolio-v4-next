import { ProjectStyles, Banner } from './styles';

const Project = ({ banner, alt }) => {
  return (
    <ProjectStyles>
      <Banner src={`images/banners/${banner}`} alt={alt} />
    </ProjectStyles>
  );
};

export default Project;
