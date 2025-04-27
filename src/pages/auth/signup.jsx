import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/sideBar/Sidebar';
import TermsAgreement from './components/menu/TermsAgreement';
import IdentityVerification from './components/menu/IdentityVerification';
import ProfileSetup from './components/menu/ProfileSetup';

const SignUpPage = () => {
  const [step, setStep] = useState('terms'); // 초기 단계: 약관 동의

  const renderStepComponent = () => {
    switch (step) {
      case 'terms':
        return <TermsAgreement setStep={setStep} />;
      case 'identity':
        return <IdentityVerification setStep={setStep} />;
      case 'profile':
        return <ProfileSetup setStep={setStep} />;
      default:
        return <TermsAgreement setStep={setStep} />;
    }
  };

  return (
    <PageWrapper>
      <Sidebar step={step} setStep={setStep} />
      <ContentWrapper>{renderStepComponent()}</ContentWrapper>
    </PageWrapper>
  );
};

export default SignUpPage;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: white;
  padding: 40px;
  overflow-y: auto;
`;
