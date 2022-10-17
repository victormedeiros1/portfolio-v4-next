import { LanguageProvider } from 'src/context/Language';
import { ThemeProvider } from 'next-themes';
import { darkTheme } from '../stitches.config';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light', dark: darkTheme.className }}
    >
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default MyApp;
