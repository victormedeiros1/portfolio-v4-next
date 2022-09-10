import { BannerStyles } from './styles';

const Banner = ({ onClick, banner, alt, dataTarget }) => {
  return (
    <BannerStyles onClick={onClick} data-target={dataTarget} src={banner} alt={alt} />
  );
};

export default Banner;
