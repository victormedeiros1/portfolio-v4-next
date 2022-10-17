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
    scrollBehavior: 'smooth',
  },
  '::-webkit-scrollbar': {
    width: 6,
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px gray',
  },

  '::-webkit-scrollbar-thumb': {
    background: '$green',
    borderRadius: 10,

    '&:hover': {
      background: '#20aa47',
    },
  },
  body: {
    backgroundImage: '$background',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    backgroundAttachment: 'fixed',
  },

  'header, main, section, footer': {
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 992px)': {
      flexDirection: 'column-reverse',
    },
  },

  'h1, h2': {
    fontFamily: 'Concert One, sans-serif',
  },

  '.social-media-colors': {
    fill: '$dark',
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

export const { theme, createTheme } = createStitches({
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
      80: '5rem',
      100: '6.25rem',
      128: '8rem',
    },
    fontSizes: {
      10: '.625rem',
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
      '-1': '-1',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    },
    colors: {
      background: 'url(/images/backgrounds/light.jpg)',
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
      logoLeft: '#4A4A4A',
      logoRight: '#2F2F2F',
    },
  },
  // DON'T WORKING
  // media: {
  //   xs: '(max-width: 576px)',
  //   sm: '(max-width: 768px)',
  //   md: '(max-width: 992px)',
  // },
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

export const darkTheme = createTheme({
  colors: {
    background: 'url(/images/backgrounds/dark.jpg)',
    dark: '#EEECE9',
    light: '#2F2F2F',
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
    logoLeft: '#202020',
    logoRight: '#181818',
  },
});
