import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
