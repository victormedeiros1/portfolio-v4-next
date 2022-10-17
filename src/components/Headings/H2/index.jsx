import React from 'react';
import Bars from 'src/components/Bars';
import { Box, H2Styles } from './styles';

export default function H2({ children, style, reverseBar }) {
  return (
    <Box style={style}>
      <Bars size="large" color="green" />
      <H2Styles>{children}</H2Styles>
      <Bars size="large" color="green" direction={reverseBar} />
    </Box>
  );
}
