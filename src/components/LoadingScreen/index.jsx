import { LoadingScreenStyles, Bar, Progress } from './styles';

export default function LoadingScreen() {
  return (
    <LoadingScreenStyles>
      <Bar>
        <Progress />
      </Bar>
    </LoadingScreenStyles>
  );
}
