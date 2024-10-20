import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Make sure to import the global CSS
import Solutions from './pages/SolutionsPage';
import About from './pages/AboutPage';
import GetStarted from './pages/GetStartedPage';

const App: React.FC = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/solutions" element={<Solutions />} /> 
                <Route path="/about" element={<About />} />
                <Route path ='/get-started' element={<GetStarted />} />
            </Routes>
        </Router>
  );
};

export default App;
