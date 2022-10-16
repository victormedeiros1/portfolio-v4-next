import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const useLanguage = () => {
  return useContext(LanguageContext);
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en-US');

  const values = {
    language,
    setLanguage,
  };

  return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>;
};
export { useLanguage, LanguageProvider };
