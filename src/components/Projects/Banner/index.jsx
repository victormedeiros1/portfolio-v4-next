import { BannerStyles, BannerWrapper } from './styles';

const Banner = ({ onClick, banner, alt, dataTarget }) => (
  <BannerWrapper>
    <BannerStyles
      width={800}
      height={182}
      layout="responsive"
      onClick={onClick}
      data-target={dataTarget}
      src={banner}
      alt={alt}
    />
  </BannerWrapper>
);
export default Banner;
