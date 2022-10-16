import React from 'react';
import LanguageProvider from './Language';

export default function Provider({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
