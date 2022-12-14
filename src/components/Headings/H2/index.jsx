import Bars from 'src/components/Bars';
import { Box, H2Styles } from './styles';

const H2 = ({ children, style, reverseBar }) => (
  <Box style={style}>
    <Bars size="large" color="green" />
    <H2Styles>{children}</H2Styles>
    <Bars size="large" color="green" direction={reverseBar} />
  </Box>
);

export default H2;
