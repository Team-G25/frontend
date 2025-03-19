import styled from 'styled-components';
import Sidebar from '@components/common/sideBar/SideBar';
import MainImage from '../assets/images/main-image1.svg?react';

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ImageWrapper>
          <MainImage />
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
