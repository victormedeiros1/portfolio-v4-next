import { styled } from '@stitches/react';

export const NavbarStyles = styled('nav', {});

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
  position: 'fixed',
  top: '$16',
  right: '$16',
  listStyle: 'none',
});

export const NavItem = styled('li', {});

export const NavLink = styled('a', {
  fontSize: '$12',
  fontWeight: 500,

  '&:hover': {
    color: '$green',
  },
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
  marginBottom: '$4',
});

export const SmallBar = styled('div', {
  width: 10,
  height: 1,
  background: '$dark',
  marginBottom: '$4',
});
