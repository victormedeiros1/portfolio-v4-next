import { styled } from '@stitches/react';

export const H1 = styled('h1', {
  color: '$dark',
  fontSize: '$100',
  lineHeight: '$100',
  marginBottom: '$20',

  '@media (max-width: 992px)': {
    fontSize: '$64',
    lineHeight: '$64',
  },
});
