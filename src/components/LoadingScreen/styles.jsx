import { styled, keyframes } from '@stitches/react';

const loading = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
});

export const LoadingScreenStyles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100vh',
  width: '100%',
  opacity: 1,
  background: '$light',
  zIndex: '$4',
});

export const Bar = styled('div', {
  background: '$dark',
  borderRadius: 100,
  width: 200,
  height: 20,
  padding: 4,
});

export const Progress = styled('div', {
  background: '$light',
  borderRadius: 100,
  width: '100%',
  height: '100%',
  animation: `${loading} 2s linear`,
});
