import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState();
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
      });
      setCookie('user', response.data.user, {
        path: '/',
        secure: true,
      });
      navigate('/');
    } catch (err) {
      setAuthError(err.response.data.message);
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
          {authError ? <p className="text-danger">{authError}</p> : null}
          <button className="auth-btn" type="submit">
            Login
          </button>
          <button
            className="auth-btn-cancel"
            onClick={() => navigate('/')}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
