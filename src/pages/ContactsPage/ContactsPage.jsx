
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contact/contact.actions';
import { selectContactsIsLoading } from 'redux/contact/selectors';
import css from '../ContactsPage/ContactsPages.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
   const isLoading = useSelector(selectContactsIsLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      <PhoneBook />
      <Filter />
      <Contacts />
    </div>
  );
};
export default ContactsPage;
