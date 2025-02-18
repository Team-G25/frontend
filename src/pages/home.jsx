import styled from 'styled-components';
import theme from '@/styles/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.colors.white1};
`;

const Title = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.xLarge};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.black1};
`;

const StyledButton = styled.button`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.semiBold};
  color: ${theme.colors.white};

  padding: 12px 24px;
  border-radius: 8px;
  background-color: ${theme.colors.red};
  transition: background 0.3s;

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Mailer 📤 </Title>

      <StyledButton>Get Started</StyledButton>
    </Container>
  );
};

export default Home;
