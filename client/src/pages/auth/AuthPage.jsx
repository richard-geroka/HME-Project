import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(['jwt-access', 'user']);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/user/login',
        {
          username,
          password,
        },
      );
      setCookie('jwt-access', response.data.token, {
        path: '/',
        secure: true,
        httpOnly: true,
      });
      setCookie('user', response.data.user, {
        path: '/',
        secure: true,
        httpOnly: true,
      });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="auth-container">
        <form onSubmit={onSubmit}>
          <h2>Login</h2>
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
          <button className="auth-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
