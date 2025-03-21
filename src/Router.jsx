import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Test from '@pages/test';
import MailManually from '@pages/mailManually/mailManually';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/mailManually" element={<MailManually />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
