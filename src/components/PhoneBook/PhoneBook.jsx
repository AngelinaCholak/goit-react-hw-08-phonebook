import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './PhoneBook.module.css';
import { GoPersonAdd } from 'react-icons/go';
import { addContact } from 'redux/contact/contact.actions';
import { Loader } from 'components/Loader/Loader';
import { selectContactsIsLoading } from 'redux/contact/selectors'; 

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const onAddContact = event => {
    event.preventDefault();

    const formData = {
      name,
      number,
    };

    dispatch(addContact(formData))
      .unwrap()
      .then(() => event.target.reset());
  };

  return (
    <form onSubmit={onAddContact}>
      {isLoading && <Loader />}
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <div className={css.inputContainer}>
        <h2 className={css.inputTitle}>Name</h2>
        <input
          className={css.phoneBookInput}
          type="text"
          name="contactName"
          required
          value={name}
          onChange={handleNameChange}
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
          value={number}
          onChange={handleNumberChange}
          placeholder="number"
        />
      </div>
      <br />
      <button type="submit" className={css.phoneBookButton}>
        <GoPersonAdd className={css.SearchFormButtonLabel} size={20} />
        Add contact
      </button>
    </form>
  );
};
export default PhoneBook;
