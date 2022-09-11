import { styled } from '@stitches/react';

export const H3Styles = styled('h3', {
  color: '$dark',
  fontSize: '$36',
  lineHeight: '$56',
  fontWeight: 900,
  marginBottom: '$16',

  '@media(max-width: 992px)': {
    fontSize: '$24',
    lineHeight: '$36',
    marginBottom: '$8',
  },

  variants: {
    size: {
      small: {
        fontSize: '$24',
        lineHeight: '$36',
        marginBottom: '$8',
      },
    },
  },
});
