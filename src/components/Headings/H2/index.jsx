import { Box, H2Styles, LargeBar, MediumBar, SmallBar } from './styles';

const H2 = ({ children }) => {
  return (
    <Box>
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
