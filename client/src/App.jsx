import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<ServicePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
