import { styled } from '@stitches/react';

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '$48',
});

export const TitleStyles = styled('h2', {
  color: '$green',
  fontSize: '$80',
  lineHeight: '$64',
  marginBottom: '10px',
});

export const LargeBar = styled('div', {
  width: '150px',
  height: '2px',
  background: '$green',
});

export const MediumBar = styled('div', {
  width: '100px',
  height: '2px',
  background: '$green',
});

export const SmallBar = styled('div', {
  width: '50px',
  height: '2px',
  background: '$green',
});
