import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import css from '../pages/LoginContact.module.css';

const LoginContact = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); 

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    
    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData))
      .then(() => {
        setIsLoading(false); 
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });
    

  };

  return (
    <div className={css.loginContainer}>
      <h1 className={css.loginTitle}>Login</h1>
      <form onSubmit={onSubmit} className={css.loginForm}>
        {isLoading && <Loader />}
        <label>
          <div className={css.inputContainer}>
            <h2 className={css.inputLabel}>Email</h2>
            <input
              type="email"
              placeholder="Contact@contact.com"
              required
              name="userEmail"
              className={css.loginInput}
            />
          </div>
          <div className={css.inputContainer}>
            <h2 className={css.inputLabel}>Password</h2>
            <input
              type="password"
              placeholder="*******"
              required
              name="userPassword"
              minLength={7}
              className={css.loginInput}
            />
          </div>
          <button className={css.buttonLabel} type="submit">
            Sign In
          </button>
        </label>
      </form>
    </div>
  );
};

export default LoginContact;
