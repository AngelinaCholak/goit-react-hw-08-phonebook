
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchContact } from 'redux/contact/contact.actions';
import css from '../pages/ContactsPages.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <PhoneBook />
      <Filter />
     <Contacts />
    </div>
  );
};
export default ContactsPage;
