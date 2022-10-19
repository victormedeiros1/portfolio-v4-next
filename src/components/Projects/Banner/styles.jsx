import { styled } from '@stitches/react';
import Image from 'next/image';

export const BannerWrapper = styled('div', {
  position: 'relative',
  width: '180%',
  height: '7vw',
  transition: '0.3s',
  transform: 'translateX(-22%) translateY(0) rotate(20deg)',
  '&:hover': {
    transform: 'translateX(-20%) rotate(20deg)',
  },
});

export const BannerStyles = styled(Image, {
  border: '1px solid green',
  cursor: 'pointer',
  marginTop: -5,
});
