import { Box, TitleStyles, LargeBar, MediumBar, SmallBar } from './styles';

const Title = ({ children }) => {
  return (
    <Box>
      <SmallBar></SmallBar>
      <MediumBar></MediumBar>
      <LargeBar></LargeBar>
      <TitleStyles>{children}</TitleStyles>
      <LargeBar></LargeBar>
      <MediumBar></MediumBar>
      <SmallBar></SmallBar>
    </Box>
  );
};

export default Title;
