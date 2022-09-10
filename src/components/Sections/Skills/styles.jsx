import { styled } from '@stitches/react';

export const Title = styled('h2', {
  visibility: 'hidden',
  position: 'absolute',

  left: '50%',
  transform: 'translateX(-50%)',

  color: '$green',
  fontSize: '$48',
  lineHeight: '$48',
});
