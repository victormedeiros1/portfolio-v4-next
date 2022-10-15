import { styled } from '@stitches/react';

export const ContainerStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',

  width: '100%',
  maxWidth: 1200,
  minHeight: '100vh',
  margin: '0 auto',

  padding: '$64 $20',

  '@media (max-width: 922px)': {
    minHeight: 'initial',
    padding: '$32 $20',
  },
});
