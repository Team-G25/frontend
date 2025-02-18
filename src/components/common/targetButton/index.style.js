import styled from 'styled-components';
import theme from '@/styles/theme';

export const ButtonContainer = styled.section`
  display: flex;
  width: 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.red : theme.colors.white};
  border: ${({ $isSelected }) =>
    $isSelected ? 'none' : `1px solid ${theme.colors.gray3}`};

  font-size: ${theme.font.size.small};
  font-weight: ${({ $isSelected }) =>
    $isSelected ? theme.font.weight.bold : theme.font.weight.medium};
  color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.white : theme.colors.gray3};

  &:hover {
    background-color: ${theme.colors.red_hover};
    color: ${theme.colors.white};
  }
`;
