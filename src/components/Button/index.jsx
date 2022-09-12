import { ButtonStyles } from './styles';

export default function Button({ children, to, target }) {
  return (
    <ButtonStyles href={to} target={target}>
      {children}
    </ButtonStyles>
  );
}
