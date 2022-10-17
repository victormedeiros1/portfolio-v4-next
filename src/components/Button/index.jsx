import { ButtonStyles } from './styles';

const Button = ({ children, to, target }) => (
  <ButtonStyles href={to} target={target}>
    {children}
  </ButtonStyles>
);

export default Button;
