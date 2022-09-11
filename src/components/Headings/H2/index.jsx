import { Box, H2Styles, LargeBar, MediumBar, SmallBar } from './styles';

const H2 = ({ children, style }) => {
  return (
    <Box style={style}>
      <SmallBar></SmallBar>
      <MediumBar></MediumBar>
      <LargeBar></LargeBar>
      <H2Styles>{children}</H2Styles>
      <LargeBar></LargeBar>
      <MediumBar></MediumBar>
      <SmallBar></SmallBar>
    </Box>
  );
};

export default H2;
