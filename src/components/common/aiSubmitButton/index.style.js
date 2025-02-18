import styled from 'styled-components';
import theme from '@/styles/theme';
import ArrowRight from '../../../assets/svgs/ic_arrow_right.svg?react';

export const StyledButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 8px;
  align-items: center;
  border-radius: 50%;
  background-color: ${theme.colors.red};

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;

export const ArrowIcon = styled(ArrowRight)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.white};
`;
