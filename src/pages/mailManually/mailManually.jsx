import { PageContainer, MainContent } from './index.style';
import Sidebar from '@/components/common/sideBar/SideBarComponent';
import MailEditor from './components/common/manualEditor/manualEditorComp';

const MailManually = () => {
  return (
      <PageContainer>
        <Sidebar />
        <MainContent>
          <MailEditor />
        </MainContent>
      </PageContainer>
  );
};

export default MailManually;
