import { ButtonStyles } from './styles';

const Button = ({ children, to, target }) => {
  return (
    <ButtonStyles href={to} target={target}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
