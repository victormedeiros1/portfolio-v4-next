import { styled } from '@stitches/react';
import Image from 'next/image';

export const Left = styled('div', {
  maxWidth: 580,
  width: '100%',
  marginRight: '$100',

  '@media (max-width: 992px)': {
    marginRight: 0,
  },
});

export const Right = styled('div', {
  width: 500,
  position: 'relative',

  '@media (max-width: 992px)': {
    width: '100%',
    maxWidth: 500,
  },
});

export const ProfilePicture = styled(Image, {
  position: 'relative',
  // '@media (max-width: 992px)': {
  //   width: '100%',
  //   maxWidth: 300,
  // },
});
