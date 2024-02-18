import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import ServicePage from './pages/services/ServicePage';
import ProjectPage from './pages/projects/ProjectPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Auth from './pages/auth/AuthPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
