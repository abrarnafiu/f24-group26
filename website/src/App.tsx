import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Make sure to import the global CSS
import Solutions from './pages/SolutionsPage';

const App: React.FC = () => {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/solutions" element={<Solutions />} /> 
            </Routes>
        </Router>
  );
};

export default App;
