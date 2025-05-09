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
} from './index.style';

import ArrowUp from '../../../assets/svgs/ic_arrow_up_black.svg?react';
import ArrowDown from '../../../assets/svgs/ic_arrow_down.svg?react';
import Profile from '../../../assets/svgs/ic_profile.svg?react';

const Sidebar = () => {
  const [isMailMenuOpen, setIsMailMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // localStorage에 isSignedUp 키로 회원가입 여부를 저장했다고 가정
    const isSignedUp = localStorage.getItem('isSignedUp') === 'true';

    if (isSignedUp) {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

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
      <LoginSection onClick={handleLoginClick}>
        <Profile />
        <span>LOGIN</span>
      </LoginSection>
    </SidebarContainer>
  );
};

export default Sidebar;
