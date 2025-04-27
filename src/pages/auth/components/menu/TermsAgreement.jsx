import styled from 'styled-components';
import theme from '@styles/theme';
import { termsData } from '@pages/auth/constants/terms';

const TermsAgreement = ({ setStep }) => {
  const handleAgreeAll = () => {
    setStep('identity');
  };

  return (
    <Wrapper>
      {termsData.map((term) => (
        <TextBox key={term.id}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
            {term.title}
          </h3>
          <Content>{term.content}</Content>
        </TextBox>
      ))}
      <Button onClick={handleAgreeAll}>모두 동의하고 가입 진행하기</Button>
    </Wrapper>
  );
};

export default TermsAgreement;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${theme.colors.white1};
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  white-space: pre-wrap; 
  font-size: ${theme.font.size.small};
  color: ${theme.colors.black2};
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-family: ${theme.font.family.basic};
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.white};
  background-color: ${theme.colors.red};
  border-radius: 18px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: ${theme.colors.red_hover};
  }
`;
