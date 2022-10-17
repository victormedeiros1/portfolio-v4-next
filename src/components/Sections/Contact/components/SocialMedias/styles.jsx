import { styled } from '@stitches/react';

export const SocialMediasStyles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '@media(max-width: 922px)': {
    justifyContent: 'initial',
  },
  '@media(max-width: 576px)': {
    gap: '$8',
  },
});

export const SocialMediaGroup = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$16',

  '&:hover .social-media-colors': {
    fill: '$green',
  },
  '&:hover span': {
    color: '$green',
  },
});

export const SocialMedia = styled('span', {
  color: '$dark',
  fontSize: '$40',
  lineHeight: '$64',
  fontWeight: '700',

  '@media(max-width: 576px)': {
    fontSize: '$24',
    lineHeight: '$36',
  },
});
