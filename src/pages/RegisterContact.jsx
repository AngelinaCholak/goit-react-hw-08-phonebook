import { Loader } from 'components/Loader/Loader';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';
import css from '../pages/LoginContact/LoginContact.module.css';

export const RegisterContact = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false); 
  
  const onSubmit = e => {
    e.preventDefault();
     setIsLoading(true);
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData))
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error adding contact:', error);
      });
  };
  return (
    <div className={css.loginContainer}>
      <div className="login-container">
        <h1 className={css.loginTitle}>Register</h1>
        <form onSubmit={onSubmit} className="login-form">
          {isLoading && <Loader />}
          <label>
            <div className={css.inputContainer}>
              <h2 className={css.inputLabel}>Name</h2>
              <input
                type="text"
                placeholder="Name"
                required
                name="userName"
                className={css.loginInput}
              />
            </div>
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
              Register
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
