import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import ServicePage from './pages/services/ServicePage';
import ProjectPage from './pages/projects/ProjectPage';

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