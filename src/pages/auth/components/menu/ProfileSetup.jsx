import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '@/apis/auth/authApis';

import styled from 'styled-components';
import theme from '@styles/theme';
import DefaultProfileIcon from '@assets/svgs/ic_profile.svg';
import AlertModal from '@components/common/alertModal/CommonAlertModal'; 

const ProfileSetup = ({ email, password }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [modalMessage, setModalMessage] = useState(null); 

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const isAllFilled = profileImage && name;

  const handleSignUp = async () => {
    try {
      const res = await signupUser({
        nickname: name,
        email,
        password,
      });
      console.log('회원가입 성공:', res);
      setModalMessage('회원가입이 완료되었습니다!');
    } catch (error) {
      console.error('회원가입 실패:', error);
      setModalMessage('회원가입에 실패했습니다.');
    }
  };

  const handleModalClose = () => {
    if (modalMessage === '회원가입이 완료되었습니다!') {
      navigate('/login');
    } else {
      setModalMessage(null);
    }
  };

  return (
    <Wrapper>
      <ProfileImageWrapper
        $hasImage={!!profileImage}
        onClick={handleImageClick}
      >
        {profileImage ? (
          <ProfileImage src={profileImage} alt="프로필 사진" />
        ) : (
          <DefaultImage src={DefaultProfileIcon} alt="기본 프로필 아이콘" />
        )}
      </ProfileImageWrapper>
      <HiddenInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <Input
        placeholder="사용자 이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {isAllFilled && (
        <SignUpButton type="submit" onClick={handleSignUp}>
          회원가입하기
        </SignUpButton>
      )}

      {modalMessage && (
        <AlertModal
          title={modalMessage}
          buttonText="확인"
          onButtonClick={handleModalClose}
        />
      )}
    </Wrapper>
  );
};

export default ProfileSetup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ProfileImageWrapper = styled.div`
  width: 232px;
  height: 232px;
  border-radius: 50%;
  border: ${({ $hasImage }) => ($hasImage ? '9px solid black' : 'none')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 232px;
  height: 232px;
  object-fit: cover;
`;

const DefaultImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HiddenInput = styled.input`
  display: none;
`;

const Input = styled.input`
  margin-top: 52px;
  width: 300px;
  padding: 18px 0;
  border: 1px solid ${theme.colors.red};
  border-radius: 20px;
  font-size: ${theme.font.size.medium};
  text-align: center;

  ::placeholder {
    color: ${theme.colors.gray};
  }
`;

const SignUpButton = styled.button`
  margin-top: 48px;
  width: 300px;
  padding: 21px 0;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.regular};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;
