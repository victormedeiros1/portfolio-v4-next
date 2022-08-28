import { createStitches, globalCss } from '@stitches/react';

const globalStyles = globalCss({
  'html, body': {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    padding: 0,
    margin: 0,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '*': {
    boxSizing: 'border-box',
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
