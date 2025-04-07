import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const dateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-4._%+-]+@[a-zA-Z0-4.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dationErrors = {};

    if (!dateEmail(email)) {
      dationErrors.email = 'Email форматы дұрыс емес!';
    }

    if (password.length < 4) {
      dationErrors.password = 'Пароль кемінде 4 символдан тұруы керек!';
    }

    if (Object.keys(dationErrors).length > 0) {
      setErrors(dationErrors);
    } else {
      setErrors({});
      alert('Login сәтті өтті!');
      navigate('/home'); 
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
