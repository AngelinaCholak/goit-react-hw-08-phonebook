
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layoyt } from './Layoyt/Layoyt';
import { Home } from 'pages/Home';
import ContactsPage from 'pages/ContactsPage';
import { RegisterContact } from 'pages/RegisterContact';
import { LoginContact } from 'pages/LoginContact';
// import { Loader } from './Loader/Loader';


export const App = () => {

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