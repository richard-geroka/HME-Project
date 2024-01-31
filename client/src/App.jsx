import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Router path="/" element={<MainPage />}></Router>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
