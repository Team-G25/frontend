import { useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  Logo,
  MenuList,
  MenuItem,
  LogoImage,
} from './index.style';

const Sidebar = ({ step, setStep }) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <h1>회원가입</h1>
      <MenuList>
        <MenuItem active={step === 'terms'} onClick={() => setStep('terms')}>
          약관 동의
        </MenuItem>
        <MenuItem
          active={step === 'identity'}
          onClick={() => setStep('identity')}
        >
          본인 인증
        </MenuItem>
        <MenuItem
          active={step === 'profile'}
          onClick={() => setStep('profile')}
        >
          프로필 설정
        </MenuItem>
      </MenuList>
      <Logo onClick={() => navigate('/')}>
        <LogoImage />
      </Logo>
    </SidebarContainer>
  );
};

export default Sidebar;
