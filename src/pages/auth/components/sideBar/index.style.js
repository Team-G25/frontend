import styled, { css } from 'styled-components';
import theme from '@styles/theme';
import MailerLogo from '../../../../assets/svgs/Mailer-logo.svg?react';

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: ${theme.colors.white1};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin-top: 11px;
    margin-bottom: 46px;
    font-family: ${theme.font.family.basic};
    font-size: ${theme.font.size.large};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.black2};
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  width: 100%;
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.semiBold};
  color: ${theme.colors.black2};
  padding: 19px 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;

  ${({ active }) =>
    active &&
    css`
      color: ${theme.colors.red};
    `}

  &:hover {
    color: ${theme.colors.red};
    background-color: ${theme.colors.pink_hover};
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const LogoImage = styled(MailerLogo)`
  width: 93px;
  height: auto;
`;
