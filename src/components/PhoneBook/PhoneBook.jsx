import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './PhoneBook.module.css';
import { GoPersonAdd } from 'react-icons/go';
import { selectContacts } from 'redux/contact/selectors';
import { addContact } from 'redux/contact/contact.actions';
import { Loader } from 'components/Loader/Loader';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isLoading, setIsLoading] = useState(false); 

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

const handleSubmit = event => {
  event.preventDefault();
  setIsLoading(true);
  const hasDuplicates =
    Array.isArray(contacts) &&
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  if (hasDuplicates) {
    alert(`Oops, contact with name '${name}' already exists!`);
    setIsLoading(false); 
    return;
  }

  dispatch(addContact({ name, phone: number }))
    .then(() => {
      setIsLoading(false); 
      setName('');
      setNumber('');
    })
    .catch(error => {
      setIsLoading(false);
      console.error('Error adding contact:', error);
    });
};
  return (
    <form onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      <h1 className={css.phoneTitle}>Phonebook</h1>
      <div className={css.inputContainer}>
        <h2 className={css.inputTitle}>Name</h2>
        <input
          className={css.phoneBookInput}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleInputChange}
          placeholder="name"
        />
      </div>
      <div className={css.inputContainer}>
        <h2 className={css.inputTitle}>Number</h2>
        <input
          className={css.phoneBookInput}
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleInputChange}
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
