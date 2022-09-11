import React from 'react';
import { H3Styles } from './styles';

const H3 = ({ children, size }) => {
  return <H3Styles size={size}>{children}</H3Styles>;
};

export default H3;