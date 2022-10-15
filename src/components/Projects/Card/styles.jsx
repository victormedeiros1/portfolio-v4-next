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
  maxWidth: 652,
  position: 'relative',
  padding: '$32',
  marginTop: '22%',

  '@media (max-width: 992px)': {
    padding: '$12',
    marginTop: '27.5%',
  },
});

export const CardFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '$48',

  '@media (max-width: 576px)': {
    flexDirection: 'column-reverse',
    alignItems: 'end',
    gap: '$8',
    marginTop: '$24',
  },
});
export const Company = styled('span', {
  color: '$dark',
  fontSize: '$14',
  lineHeight: '$18',
});
