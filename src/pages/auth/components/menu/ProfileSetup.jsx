import { useState, useRef } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import DefaultProfileIcon from '@assets/svgs/ic_profile.svg'; // 기본 프로필 아이콘

const ProfileSetup = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const fileInputRef = useRef(null);

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

  const handleSignUp = () => {
    console.log('회원가입 완료:', { profileImage, name });
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
        <SignUpButton onClick={handleSignUp}>회원가입하기</SignUpButton>
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
  /* props로 받은 profileImage 유무에 따라 border 설정 */
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
