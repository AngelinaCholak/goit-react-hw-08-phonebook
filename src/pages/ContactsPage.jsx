
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contact/contact.actions';
import { selectVisibleContacts } from 'redux/contact/selectors';
import css from '../pages/ContactsPages.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <PhoneBook />
      <Filter />
      {contacts.length > 0 && <Contacts />}
    </div>
  );
};
export default ContactsPage;
