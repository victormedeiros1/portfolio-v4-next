import { BannerStyles } from './styles';

export default function Banner({ onClick, banner, alt, dataTarget }) {
  return (
    <BannerStyles onClick={onClick} data-target={dataTarget} src={banner} alt={alt} />
  );
}
