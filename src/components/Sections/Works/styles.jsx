import { styled } from '@stitches/react';

export const Projects = styled('div', {
  display: 'flex',
});

export const Banners = styled('div', {
  width: '30%',
  maxWidth: 500,
  overflow: 'hidden',
  marginRight: '$48',
  padding: '10% 0',

  '@media (max-width: 992px)': {
    width: '40%',
    marginRight: '$24',
    padding: '10% 0',
  },

  '@media (max-width: 576px)': {
    marginRight: '$8',
  },
});

export const Cards = styled('div', {
  width: '70%',
  overflow: 'hidden',

  '@media (max-width: 992px)': {
    width: '60%',
  },
});
