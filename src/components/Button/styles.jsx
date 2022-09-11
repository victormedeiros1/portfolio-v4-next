import { styled } from '@stitches/react';

export const ButtonStyles = styled('a', {
  color: '$dark',
  fontSize: '$20',
  lineHeight: '$14',
  fontWeight: '700',

  background: 'none',

  border: '2px solid $dark',
  borderBottomLeftRadius: '90px',
  padding: '18px 40px 18px 57px',

  '&:hover': {
    color: '$light',
    backgroundColor: '$dark',
  },
});
