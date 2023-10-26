import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './task6.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordEntered, setPasswordEntered] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordEntered(true);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="error">{errors.email}</div>
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type={passwordEntered ? 'text' : 'password'} 
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="error">{errors.password}</div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="forgot-password">
          <a href="#">Forgot username or password?</a>
        </div>
        <button onClick={handleLogin} className="btn btn-primary">
          Login
        </button>
      </div>
      <div className="create-account">
        <p>Don't have an account?</p>
        <a href="#">Create an account</a>
      </div>
    </div>
  );
}

export default LoginForm;
