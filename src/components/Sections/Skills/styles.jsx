import { styled } from '@stitches/react';

export const Title = styled('h2', {
  position: 'absolute',
  fontSize: '$48',
  left: '50%',
  transform: 'translate(-40%)',
  top: '48%',
  color: '$green',
  zIndex: '$1',

  '@media (max-width: 992px)': {
    fontSize: '$48',
  },
  '@media (max-width: 576px)': {
    fontSize: '$20',
    transform: 'translate(-35%)',
    top: '49%',
  },
});
