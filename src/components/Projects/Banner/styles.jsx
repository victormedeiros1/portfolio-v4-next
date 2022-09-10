import { styled } from '@stitches/react';

export const BannerStyles = styled('img', {
  cursor: 'pointer',
  transform: 'translateX(-150px) rotate(20deg)',
  transition: '0.3s',

  '&:hover': {
    transform: 'translateX(-130px) translateY(5px) rotate(20deg)',
  },
});
