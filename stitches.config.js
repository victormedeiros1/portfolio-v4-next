import { createStitches, globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: 'Concert One, sans-serif',
  },

  html: {
    '@import': [
      "url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap')",
    ],
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  body: {
    backgroundImage: 'url(/images/backgrounds/light.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundAttachment: 'fixed',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Concert One, sans-serif',
  },

  h1: {
    fontSize: '6.25rem',
    lineHeight: '6.25rem',
  },

  h3: {
    fontSize: '5rem',
    lineHeight: '3.875rem',
  },

  h4: {
    fontSize: '1.5rem',
    lineHeight: '2.25rem',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  button: {
    cursor: 'pointer',
  },

  '@media (prefers-color-scheme: light)': {
    html: {
      colorScheme: 'dark',
    },
    body: {
      color: 'white',
      background: 'black',
    },
  },
});

globalStyles();

export const { theme } = createStitches({
  theme: {
    space: {
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      48: '3rem',
      64: '4rem',
    },
    fontSizes: {
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      60: '3.75rem',
    },
    lineHeights: {
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      60: '3.75rem',
    },
    zIndices: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    },
    colors: {
      dark: '#2F2F2F',
      light: '#EEECE9',
    },
  },
  media: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 992px)',
    lg: '(min-width: 1200px)',
    xl: '(min-width: 1440px)',
  },
  utils: {
    m: (value) => ({
      margin: value,
    }),
    mx: (value) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),

    p: (value) => ({
      padding: value,
    }),
    px: (value) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
  },
});
