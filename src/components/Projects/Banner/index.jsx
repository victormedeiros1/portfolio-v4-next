import { BannerStyles, BannerWrapper } from './styles';

const Banner = ({ onClick, banner, alt, dataTarget }) => (
  <BannerWrapper>
    <BannerStyles
      layout="fill"
      onClick={onClick}
      data-target={dataTarget}
      src={banner}
      alt={alt}
    />
  </BannerWrapper>
);
export default Banner;
