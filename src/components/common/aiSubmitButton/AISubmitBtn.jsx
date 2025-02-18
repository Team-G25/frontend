import styled from 'styled-components';
import ArrowRight from '../../../assets/svgs/ic_arrow_right.svg?react';

const StyledButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.red};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_hover};
  }
`;

const ArrowIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  color: white;
`;

const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ArrowIcon />
    </StyledButton>
  );
};

export default Button;
