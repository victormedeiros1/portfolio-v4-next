import { ProjectStyles, Banner } from './styles';

const Project = ({ onClick, banner, alt, dataTarget }) => {
  return (
    <ProjectStyles onClick={onClick}>
      <Banner data-target={dataTarget} src={banner} alt={alt} />
    </ProjectStyles>
  );
};

export default Project;
