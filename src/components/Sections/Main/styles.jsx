import { styled } from '@stitches/react';

export const MainStyles = styled('main', {
  justifyContent: 'center',
  minHeight: 'calc(100vh - 100px)',
});

export const H1 = styled('h1', {
  maxWidth: 400,
  color: '$dark',
  fontSize: '$100',
  lineHeight: '$100',
  marginBottom: '$20',

  '@media (max-width: 992px)': {
    fontSize: '$64',
    lineHeight: '$64',
    textAlign: 'center',
    marginBottom: '$12',
  },
});

export const H2 = styled('h2', {
  color: '$green',
  fontSize: '$32',
  textAlign: 'end',
  margin: '0 auto $48 auto',

  '@media (max-width: 992px)': {
    textAlign: 'center',
    maxWidth: '300px',
    fontSize: '$32',
    lineHeight: '$32',
    marginBottom: '$48',
  },
});

export const Left = styled('div', {
  textAlign: 'end',
  paddingRight: '$48',

  '@media (max-width: 992px)': {
    textAlign: 'center',
    paddingRight: 0,
    paddingTop: '$32',
  },
});

export const Right = styled('div', {
  borderLeft: '1px solid $gray500',

  paddingLeft: '$48',

  '@media (max-width: 992px)': {
    paddingLeft: 0,
    border: 'none',
  },
});
