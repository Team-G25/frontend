import styled from 'styled-components';
import Sidebar from '@components/common/sideBar/SideBar';

import MainImage1 from '../assets/images/main-image1.svg?react';
import MainImage2 from '../assets/images/main-image2.svg?react';
import MainImage3 from '../assets/images/main-image3.svg?react';
import MainImage4 from '../assets/images/main-image4.svg?react';
import MainImage5 from '../assets/images/main-image5.svg?react';

const imageComponents = [
  MainImage1,
  MainImage2,
  MainImage3,
  MainImage4,
  MainImage5,
];

const Home = () => {
  // 렌더링 시 한 번만 랜덤 이미지 선택
  const RandomImage =
    imageComponents[Math.floor(Math.random() * imageComponents.length)];

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ImageWrapper>
          <RandomImage />
        </ImageWrapper>
      </MainContent>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  height: 100vh;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
