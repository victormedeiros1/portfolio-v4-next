import React from 'react';
import { Box, H2Styles, LargeBar, MediumBar, SmallBar } from './styles';

export default function H2({ children, style }) {
  return (
    <Box style={style}>
      <SmallBar />
      <MediumBar />
      <LargeBar />
      <H2Styles>{children}</H2Styles>
      <LargeBar />
      <MediumBar />
      <SmallBar />
    </Box>
  );
}
