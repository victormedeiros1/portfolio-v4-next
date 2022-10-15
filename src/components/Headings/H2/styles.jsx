import { styled } from '@stitches/react';

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  marginBottom: '$48',

  '@media (max-width: 992px)': {
    marginBottom: '$24',
  },
});

export const H2Styles = styled('h2', {
  color: '$green',
  fontSize: '$80',
  lineHeight: '$64',
  marginBottom: 10,

  '@media (max-width: 992px)': {
    fontSize: '$48',
    lineHeight: '$48',
  },
});

export const LargeBar = styled('div', {
  width: 150,
  height: 2,
  background: '$green',
});

export const MediumBar = styled('div', {
  width: 100,
  height: 2,
  background: '$green',
});

export const SmallBar = styled('div', {
  width: 50,
  height: 2,
  background: '$green',
});
