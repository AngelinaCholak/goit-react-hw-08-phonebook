import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import css from '../Layoyt/Layoyt.module.css';

export const Layoyt = () => {
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
                Home
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
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
