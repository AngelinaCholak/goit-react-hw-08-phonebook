import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contacts.module.css';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
  selectFilter,
} from 'redux/contact/selectors';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'redux/contact/contact.actions';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const showContacts = () =>
    Array.isArray(filteredContacts) && filteredContacts.length > 0;
  return (
    <div>
      <h2 className={css.contactTitle}>Contacts</h2>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      <ul className={css.contactsList}>
        {showContacts() &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <li className={css.contactsLi} key={id}>
                <div className={css.container}>
                  <span>
                    {name}: {number}
                  </span>
                  <button
                    className={css.deleteButton}
                    onClick={() => onDeleteContact(id)}
                  >
                    <RiDeleteBin5Fill className={css.iconsButton} />
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
