import { styled } from '@stitches/react';

export const Left = styled('div', {
  width: '100%',
  marginRight: '$100',

  '@media (max-width: 992px)': {
    marginRight: 0,
  },
});

export const Right = styled('div', {});

export const ProfilePicture = styled('img', {
  '@media (max-width: 992px)': {
    width: '100%',
    maxWidth: '300px',
  },
});
