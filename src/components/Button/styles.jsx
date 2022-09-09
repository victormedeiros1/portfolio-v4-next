import { styled } from '@stitches/react';

export const ButtonStyles = styled('button', {
  color: '$dark',
  fontSize: '$20',
  lineHeight: '$14',
  fontWeight: '700',

  background: 'none',

  border: '1px solid $dark',
  borderBottomLeftRadius: '90px',
  padding: '18px 40px 18px 57px',

  '&:hover': {
    color: '$light',
    backgroundColor: '$dark',
  },
});
