import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Test from '@pages/test';
import MailTemplate from '@/pages/mailTemplate/templatePage';
import MailAI from '@pages/mailAI/mailAI';
import MailManually from '@pages/mailManually/mailManually';
import MailTemporary from './pages/mailTemporary/mailTemporary';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/mailTemplate" element={<MailTemplate />} />
        <Route path="/mailAI" element={<MailAI />} />
        <Route path="/mailManually" element={<MailManually />} />
        <Route path="/mailTemporary" element={<MailTemporary />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
