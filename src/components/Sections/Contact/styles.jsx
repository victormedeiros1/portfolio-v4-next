import { styled } from '@stitches/react';

export const Left = styled('div', {
  paddingRight: '$48',
  marginBottom: '156px',
});

export const Right = styled('div', {
  borderLeft: '1px solid $gray500',
  height: '50%',
  display: 'flex',

  paddingLeft: '$48',

  '@media(max-width: 576px)': {
    paddingLeft: '$24',
  },
  '@media(max-width: 468px)': {
    border: 0,
    paddingLeft: '0',
  },
});

export const ContactLink = styled('a', {
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
    transition: '0.3s',

    textDecoration: 'underline',
    textDecorationColor: '$dark',

    '@media(max-width: 576px)': {
      textDecoration: 'none',
      opacity: '1 !important',
    },
  },
  'span:nth-child(2)': {
    top: '1.9rem',
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

export const Footer = styled('footer', {
  '@media(max-width: 468px)': {
    flexDirection: 'column !important',
  },
  '@media(max-width: 992px)': {
    width: '100%',
    alignItems: 'start',
    flexDirection: 'initial',
  },
});
