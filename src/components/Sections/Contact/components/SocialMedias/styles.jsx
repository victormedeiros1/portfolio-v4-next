import { styled } from '@stitches/react';

export const SocialMediasStyles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '400px',
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
  fontSize: '$40',
  lineHeight: '$64',
  fontWeight: '700',
});
