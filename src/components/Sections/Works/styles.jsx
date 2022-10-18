import { styled } from '@stitches/react';

export const Projects = styled('div', {
  display: 'flex',
  width: '100%',
});

export const Banners = styled('div', {
  width: '30%',
  maxWidth: 500,
  overflow: 'hidden',
  marginRight: '$48',
  padding: '10% 0',

  '@media (max-width: 992px)': {
    marginRight: '$24',
    padding: '13.5% 0',
  },

  '@media (max-width: 576px)': {
    marginRight: '$8',
  },
});

export const Cards = styled('div', {
  width: '70%',
  overflow: 'hidden',
});
