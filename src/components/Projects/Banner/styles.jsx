import { styled } from '@stitches/react';
import Image from 'next/image';

export const BannerStyles = styled('img', {
  width: '180%',
  cursor: 'pointer',
  transform: 'translateX(-22%) translateY(0) rotate(20deg)',
  transition: '0.3s',
  marginTop: -5,

  '&:hover': {
    transform: 'translateX(-20%) rotate(20deg)',
  },
});
