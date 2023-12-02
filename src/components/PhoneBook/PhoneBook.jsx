import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './PhoneBook.module.css';
import { GoPersonAdd } from 'react-icons/go';
import { addContact, fetchContact } from 'redux/contact/contact.actions';
import { Loader } from 'components/Loader/Loader';
import { selectContactsIsLoading } from 'redux/contact/selectors'; 


export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const onAddContact = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.contactName.value;
    const number = event.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    dispatch(addContact(formData))
      .unwrap()
      .then(() => event.target.reset());
  };

  return (
    <div>
      {isLoading && <Loader />}
      <form onSubmit={onAddContact}>
        <h1 className={css.phoneTitle}>Phonebook</h1>
        <div className={css.inputContainer}>
          <h2 className={css.inputTitle}>Name</h2>
          <input
            className={css.phoneBookInput}
            type="text"
            name="contactName"
            required
            placeholder="name"
          />
        </div>
        <div className={css.inputContainer}>
          <h2 className={css.inputTitle}>Number</h2>
          <input
            className={css.phoneBookInput}
            type="tel"
            name="contactNumber"
            required
            placeholder="number"
          />
        </div>
        <br />
        <button type="submit" className={css.phoneBookButton}>
          <GoPersonAdd className={css.SearchFormButtonLabel} size={20} />
          Add contact
        </button>
      </form>
    </div>
  );
};
export default PhoneBook;
