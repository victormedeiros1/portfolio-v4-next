import { styled } from '@stitches/react';

export const BarsStyles = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  variants: {
    direction: {
      reverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      end: {
        alignItems: 'end',
      },
    },
    size: {
      large: {
        gap: '$8',
      },
    },
  },
});

export const LargeBar = styled('div', {
  width: 30,
  height: 1,
  background: '$dark',

  variants: {
    size: {
      large: {
        width: 150,
        height: 2,
      },
    },
    color: {
      green: {
        background: '$green',
      },
    },
  },
});

export const MediumBar = styled('div', {
  width: 20,
  height: 1,
  background: '$dark',

  variants: {
    size: {
      large: {
        width: 100,
        height: 2,
      },
    },
    color: {
      green: {
        background: '$green',
      },
    },
  },
});

export const SmallBar = styled('div', {
  width: 10,
  height: 1,
  background: '$dark',

  variants: {
    size: {
      large: {
        width: 50,
        height: 2,
      },
    },
    color: {
      green: {
        background: '$green',
      },
    },
  },
});
