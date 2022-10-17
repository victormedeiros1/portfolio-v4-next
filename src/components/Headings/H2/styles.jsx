import { styled } from '@stitches/react';

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  marginBottom: '$48',

  '@media (max-width: 992px)': {
    gap: 0,
    marginBottom: '$24',
  },
});

export const H2Styles = styled('h2', {
  color: '$green',
  fontSize: '$80',
  lineHeight: '$64',
  marginBottom: '$8',

  '@media (max-width: 992px)': {
    fontSize: '$48',
    lineHeight: '$48',
    marginBottom: '$4',
  },
});
