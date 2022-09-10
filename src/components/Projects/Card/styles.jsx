import { styled } from '@stitches/react';

export const CardBorderTop = styled('div', {
  width: '60%',
  height: '60%',
  border: '1px solid $dark',
  borderRight: 'transparent',
  borderBottom: 'transparent',
  zIndex: '$-1',

  position: 'absolute',
  top: 0,
  left: 0,
});

export const CardBorderBottom = styled('div', {
  width: '60%',
  height: '60%',
  border: '1px solid $dark',
  borderRight: 'transparent',
  borderBottom: 'transparent',
  zIndex: '$-1',

  position: 'absolute',
  bottom: 0,
  right: 0,
  transform: 'rotate(180deg)',
});

export const CardStyles = styled('div', {
  width: '100%',
  maxWidth: '652px',
  position: 'relative',
  padding: '$32',
  marginTop: '$80',
});

export const CardTitle = styled('h3', {
  color: '$dark',
  fontSize: '$36',
  lineHeight: '$56',
  fontWeight: 900,
  marginBottom: '$16',
});

export const CardFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '$48',
});
export const Company = styled('span', {
  color: '$dark',
  fontSize: '$14',
  lineHeight: '$18',
});
