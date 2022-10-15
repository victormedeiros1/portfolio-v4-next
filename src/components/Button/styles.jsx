import { styled } from '@stitches/react';

export const ButtonStyles = styled('a', {
  color: '$dark',
  fontSize: '$20',
  lineHeight: '$14',
  fontWeight: '700',

  background: 'none',

  border: '2px solid $dark',
  borderBottomLeftRadius: '90px',
  padding: '16px 40px 16px 57px',

  '@media (max-width: 992px)': {
    fontSize: '$14',
    lineHeight: '$8',
    padding: '10px 32px 10px 42px',
  },
  '&:hover': {
    color: '$light',
    backgroundColor: '$dark',
  },
});
