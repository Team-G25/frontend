import styled from 'styled-components';
import theme from '@styles/theme';
import MailerLogo from '../../../assets/svgs/Mailer-logo.svg?react';

export const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background-color: ${theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  margin: 27px 77px 46px 10px;
  width: 93px;
  cursor: pointer;
`;

export const LogoImage = styled(MailerLogo)`
  width: 100%;
  height: auto;
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

  &:hover {
    color: ${theme.colors.red};
    background-color: ${theme.colors.pink_hover};
  }
`;

export const SubMenu = styled.ul`
  list-style: none;
  padding-left: 16px;
  margin: 0;
  color: ${theme.colors.black2};
`;

export const LoginSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.black2};
  cursor: pointer;

  svg {
    width: 36px;
    height: 36px;
  }

  &:hover {
    color: ${theme.colors.red};
    background-color: ${theme.colors.pink_hover};
  }
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;
