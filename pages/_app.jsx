import { LanguageProvider } from 'src/context/Language';

const MyApp = ({ Component, pageProps }) => {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
};

export default MyApp;
