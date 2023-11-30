import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/auth.reducer';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selectors';
import css from '../Layoyt/Layoyt.module.css';
import { IoHomeOutline } from 'react-icons/io5';

export const Layoyt = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  }
  return (
    <div className={css.filmsTrending}>
      <header className={css.container}>
        <nav>
          <ul className={css.elementLayoyt}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.headerLink
                }
                to="/"
              >
                <IoHomeOutline className={css.userHome} />
                Home
              </NavLink>
            </li>
            {authenticated ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="/contacts"
                  >
                    Contacts
                  </NavLink>
                </li>
                <div className={css.userActions}>
                  <span className={css.userName}>Hello...{userData.name}!</span>
                  <button className={css.logOut} onClick={onLogOut}>
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? css.active : css.headerLink
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer className={css.container}></footer> */}
    </div>
  );
}
