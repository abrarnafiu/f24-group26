import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Solutions from './pages/SolutionsPage';
import GetStarted from './pages/GetStartedPage';
import About from './pages/AboutPage';
const App: React.FC = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/solutions" element={<Solutions />} /> 
                <Route path="/About" element={<About />} />
                <Route path='/get-started' element={<GetStarted />} />
            </Routes>
        </Router>
  );
};

export default App;
