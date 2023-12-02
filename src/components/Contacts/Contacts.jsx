import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contacts.module.css';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contact/selectors';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Loader } from 'components/Loader/Loader';
import { deleteContact, fetchContact } from 'redux/contact/contact.actions'; 

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  

  const showContacts = () => Array.isArray(contacts) && contacts.length > 0;
  return (
    <div>
      <h2 className={css.contactTitle}>Contacts</h2>
      {error !== null && <p className="error-bage">{error}</p>}
      {isLoading && <Loader />}
      <ul className={css.contactsList}>
        {showContacts() &&
          contacts.map(({ id, name, number }) => {
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
