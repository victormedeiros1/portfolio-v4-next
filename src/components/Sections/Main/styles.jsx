import { styled } from '@stitches/react';

export const H1 = styled('h1', {
  maxWidth: 400,
  color: '$dark',
  fontSize: '$100',
  lineHeight: '$100',
  marginBottom: '$20',
});

export const H2 = styled('h2', {
  fontSize: '$32',
  color: '$green',
  marginBottom: '$48',

  '@media (max-width: 992px)': {
    fontSize: '$32',
    lineHeight: '$32',
  },
});

export const Left = styled('div', {
  textAlign: 'end',
  paddingRight: '$48',
});

export const Right = styled('div', {
  borderLeft: '1px solid $gray500',

  paddingLeft: '$48',

  '@media (max-width: 992px)': {
    paddingLeft: 0,
    border: 'none',
  },
});
