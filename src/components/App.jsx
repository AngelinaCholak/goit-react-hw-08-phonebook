
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import ContactsPage from 'pages/ContactsPage';
import { RegisterContact } from 'pages/RegisterContact';
import LoginContact from 'pages/LoginContact';
import { Layoyt } from './Layoyt/Layoyt';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/auth.reducer';

// import { Loader } from './Loader/Loader';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      {/* <Loader /> */}
      <Routes>
        <Route path="/" element={<Layoyt />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterContact />} />
          <Route path="login" element={<LoginContact />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;