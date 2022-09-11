import { styled } from '@stitches/react';

export const Left = styled('div', {
  paddingRight: '$48',
});

export const Right = styled('div', {
  borderLeft: '1px solid $gray500',

  paddingLeft: '$48',
});

export const Form = styled('form', {});

export const Input = styled('input', {
  width: '100%',
  maxWidth: '365px',
  height: '150px',

  backgroundColor: 'transparent',

  border: '1px solid $gray500',
  borderRadius: '8px',
  marginTop: '-16px',
  marginBottom: '$48',
});
