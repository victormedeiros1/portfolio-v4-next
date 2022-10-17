import { BarsStyles, SmallBar, MediumBar, LargeBar } from './styles';

const Bars = ({ direction, size, color, align }) => {
  return (
    <BarsStyles size={size} direction={direction} align={align}>
      <SmallBar size={size} color={color} />
      <MediumBar size={size} color={color} />
      <LargeBar size={size} color={color} />
    </BarsStyles>
  );
};

export default Bars;
