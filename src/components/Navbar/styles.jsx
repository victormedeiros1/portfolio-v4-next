import { styled, keyframes } from '@stitches/react';

const loading = keyframes({
  from: {
    opacity: 0,
  },
  '50%': {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const NavbarStyles = styled('nav', {
  animation: `${loading} 3s linear`,
});

export const NavLanguages = styled('ul', {
  display: 'flex',
  gap: '$16',
  position: 'fixed',
  top: '$16',
  left: '$16',
  listStyle: 'none',
});

export const NavLanguage = styled('li', {
  button: {
    background: 'none',
    border: 'none',
    transitionDuration: '0.1s',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

export const NavLinks = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'end',
  alignItems: 'end',
  gap: '$8',
  position: 'fixed',
  top: '$16',
  right: '$16',
  listStyle: 'none',
});

export const NavItem = styled('li', {
  userSelect: 'none',
  transitionDuration: '0.2s',

  '&:hover': {
    transform: 'translateX(-3px)',
  },
});

export const NavLink = styled('a', {
  display: 'block',
  fontSize: '$12',
  fontWeight: 500,

  '&:hover': {
    color: '$green',
  },
});

export const Bars = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  gap: '$4',
});

export const LargeBar = styled('div', {
  width: 30,
  height: 1,
  background: '$dark',
  marginBottom: '$4',
});

export const MediumBar = styled('div', {
  width: 20,
  height: 1,
  background: '$dark',
});

export const SmallBar = styled('div', {
  width: 10,
  height: 1,
  background: '$dark',
});
