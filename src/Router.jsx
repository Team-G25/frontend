import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Test from '@pages/test';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
