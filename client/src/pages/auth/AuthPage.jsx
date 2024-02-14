import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/user/login', {
        username,
        password,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="auth-container">
        <form onSubmit={onSubmit}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </form>
      </div>
    </>
  );
};

export default Auth;
