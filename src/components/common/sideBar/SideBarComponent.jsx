import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  Logo,
  MenuList,
  MenuItem,
  SubMenu,
  LoginSection,
  LogoImage,
  ArrowIcon,
  ProfileImage,
} from './index.style';

import ArrowUp from '../../../assets/svgs/ic_arrow_up_black.svg?react';
import ArrowDown from '../../../assets/svgs/ic_arrow_down.svg?react';
import DefaultProfile from '../../../assets/svgs/ic_profile.svg?react';

import useUserStore from '@pages/auth/store/userStore';
import { useLogout } from '@pages/auth/utils/authService';

const Sidebar = () => {
  const [isMailMenuOpen, setIsMailMenuOpen] = useState(false);
  const logout = useLogout();
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <Logo onClick={() => navigate('/')}>
        <LogoImage />
      </Logo>

      <MenuList>
        <MenuItem onClick={() => setIsMailMenuOpen(!isMailMenuOpen)}>
          메일 작성
          <ArrowIcon>{isMailMenuOpen ? <ArrowUp /> : <ArrowDown />}</ArrowIcon>
        </MenuItem>
        {isMailMenuOpen && (
          <SubMenu>
            <MenuItem onClick={() => navigate('/mailTemplate')}>
              템플릿
            </MenuItem>
            <MenuItem onClick={() => navigate('/mailAI')}>AI 작성</MenuItem>
            <MenuItem onClick={() => navigate('/mailManually')}>
              수동 작성
            </MenuItem>
          </SubMenu>
        )}
        <MenuItem onClick={() => navigate('/mailTemporary')}>임시보관</MenuItem>
      </MenuList>

      <LoginSection onClick={user ? logout : () => navigate('/login')}>
        {user ? (
          <>
            <ProfileImage src={user.profileUrl} alt="프로필" />
            <span>{user.nickname}</span>
          </>
        ) : (
          <>
            <DefaultProfile />
            <span>LOGIN</span>
          </>
        )}
      </LoginSection>
    </SidebarContainer>
  );
};

export default Sidebar;
