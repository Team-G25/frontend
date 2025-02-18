import { StyledButton, ArrowIcon } from './index.style';

const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ArrowIcon />
    </StyledButton>
  );
};

export default Button;
