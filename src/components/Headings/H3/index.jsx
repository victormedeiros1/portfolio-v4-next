import React from 'react';
import { H3Styles } from './styles';

export default function H3({ children, size }) {
  return <H3Styles size={size}>{children}</H3Styles>;
}
