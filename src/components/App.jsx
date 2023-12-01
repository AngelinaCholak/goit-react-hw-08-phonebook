
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import ContactsPage from 'pages/ContactsPage';
import { RegisterContact } from 'pages/RegisterContact';
import LoginContact from 'pages/LoginContact';
import { Layoyt } from './Layoyt/Layoyt';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/auth.reducer';
import * as ROUTES from 'constans/routes.js';
import RestrictedRoute from '../components/RestrictedRoute';
import PrivateRoute from './PrivateRoute';


const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.HOME_ROUTE}>
        <RegisterContact />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <LoginContact />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<Layoyt />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;