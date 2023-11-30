import React from 'react'
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';

export const LoginContact = () => {
  const dispatch = useDispatch();


  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="login-form">
        <label htmlFor="username">Email</label>
        <input
          type="email"
          placeholder="Contact@contact.com"
          required
          name="userEmail"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*******"
          required
          name="userPassword"
          minLength={7}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
