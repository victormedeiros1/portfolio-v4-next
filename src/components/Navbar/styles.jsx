import { styled } from '@stitches/react';

export const NavbarStyles = styled('nav', {});

export const NavLinks = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'end',
  alignItems: 'end',
  position: 'fixed',
  top: '$64',
  right: '$24',
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
  width: '30px',
  height: '1px',
  background: '$dark',
  marginBottom: '$4',
});

export const MediumBar = styled('div', {
  width: '20px',
  height: '1px',
  background: '$dark',
  marginBottom: '$4',
});

export const SmallBar = styled('div', {
  width: '10px',
  height: '1px',
  background: '$dark',
  marginBottom: '$4',
});
