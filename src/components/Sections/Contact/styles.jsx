import { styled } from '@stitches/react';

export const Left = styled('div', {
  paddingRight: '$48',
  marginBottom: '156px',
});

export const Right = styled('div', {
  borderLeft: '1px solid $gray500',

  paddingLeft: '$48',
});

export const ContactLink = styled('div', {
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  fontSize: '$36',
  lineHeight: '$36',
  fontWeight: '900',

  span: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    color: '$dark',
    userSelect: 'none',
    transition: 0.1,

    position: 'absolute',
    transition: '0.3s',

    textDecoration: 'underline',
    textDecorationColor: '$dark',
  },
  'span:nth-child(2)': {
    top: '1.8rem',
    opacity: 0,
    transitionDelay: '0.1s',
  },
  'span:nth-child(3)': {
    top: '3.8rem',
    opacity: 0,
    transitionDelay: '0.2s',
  },
  'span:nth-child(4)': {
    top: '5.8rem',
    opacity: 0,
    transitionDelay: '0.3s',
  },

  '&:hover > span:nth-child(2)': {
    opacity: 1,
    top: '2.4rem',
  },
  '&:hover > span:nth-child(3)': {
    opacity: 1,
    top: '4.8rem',
  },
  '&:hover > span:nth-child(4)': {
    opacity: 1,
    top: '7.2rem',
  },
});
