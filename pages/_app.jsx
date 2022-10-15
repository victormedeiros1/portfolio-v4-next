import { IntlProvider } from 'react-intl';
import intlLanguages from 'src/intl';

function MyApp({ Component, pageProps }) {
  const locale = 'pt-BR';
  const messages = intlLanguages[locale];

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale={locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
