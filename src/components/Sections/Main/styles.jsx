import { styled, keyframes } from '@stitches/react';

const loading = keyframes({
  from: {
    opacity: 0,
  },
  '50%': {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const MainStyles = styled('main', {
  opacity: 1,
  justifyContent: 'center',
  minHeight: 'calc(100vh - 100px)',
  animation: `${loading} 3s linear`,
});

export const H1 = styled('h1', {
  color: '$dark',
  fontSize: '$100',
  lineHeight: '$100',
  marginBottom: '$20',

  '@media (max-width: 992px)': {
    fontSize: '$64',
    lineHeight: '$64',
    textAlign: 'center',
    marginBottom: '$12',
    maxWidth: 300,
  },
});

export const H2 = styled('h2', {
  color: '$green',
  fontSize: '$32',
  textAlign: 'end',
  margin: '0 auto $48 auto',

  '@media (max-width: 992px)': {
    textAlign: 'center',
    maxWidth: 300,
    fontSize: '$32',
    lineHeight: '$32',
    marginBottom: '$48',
  },
});

export const Left = styled('div', {
  width: '100%',
  textAlign: 'end',
  paddingRight: '$48',

  '@media (max-width: 992px)': {
    textAlign: 'center',
    paddingRight: 0,
    paddingTop: '$32',
  },
});

export const Right = styled('div', {
  width: '100%',
  borderLeft: '1px solid $gray500',
  paddingLeft: '$48',

  '@media (max-width: 992px)': {
    paddingLeft: 0,
    border: 'none',
  },
});
