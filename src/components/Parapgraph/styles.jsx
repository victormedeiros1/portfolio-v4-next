import { styled } from '@stitches/react';

export const ParagraphStyles = styled('p', {
  width: '100%',
  color: '$dark',
  fontSize: '$14',
  lineHeight: '$18',
  marginBottom: '$16',

  '@media (max-width: 992px)': {
    fontSize: '$12',
    lineHeight: '$16',
  },

  '@media (max-width: 992px)': {
    fontSize: '$10',
    lineHeight: '$14',
  },
});
