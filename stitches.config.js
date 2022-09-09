import { createStitches, globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap')",
    "url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;900&display=swap')",
  ],
  '*': {
    fontFamily: 'Poppins, sans-serif',
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  html: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },

  body: {
    backgroundImage: 'url(/images/backgrounds/light.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundAttachment: 'fixed',
  },

  'header, main, section, footer': {
    display: 'flex',
    alignItems: 'center',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Concert One, sans-serif',
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
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      80: '5rem',
      100: '6.25rem',
    },
    lineHeights: {
      12: '.75rem',
      14: '.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      80: '5rem',
      100: '6.25rem',
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
      green: '#27CA54',
      gray50: '#f9f9f9',
      gray100: '#ededed',
      gray200: '#e1e1e1',
      gray300: '#d3d3d3',
      gray400: '#c4c4c4',
      gray500: '#b3b3b3',
      gray600: '#a0a0a0',
      gray700: '#898989',
      gray800: '#6c6c6c',
      gray900: '#3f3f3f',
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
