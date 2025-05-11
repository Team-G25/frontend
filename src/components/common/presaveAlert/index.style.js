import styled from 'styled-components';
import theme from '@/styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 200px;
  overflow: hidden;

  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray3};
  border-radius: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;

  font-family: ${theme.font.popup};
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.black3};
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 22px 30px;
  justify-content: center;
  align-items: center;

  font-family: ${theme.font.popup};
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.bold};

  transition: background-color 0.3s;

  text-align: center;

  background-color: ${theme.colors.pink};
  color: ${theme.colors.red};
`;
