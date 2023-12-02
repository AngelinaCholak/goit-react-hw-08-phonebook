// import { createSelector } from '@reduxjs/toolkit/dist';

export const selectContacts = state => state.phonebook.contacts;
export const selectContactsIsLoading = state => state.phonebook.isLoading;
export const selectContactsError = state => state.phonebook.error;


export const selectFilter = state => state.phonebook.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(
//       contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
//         contact.phone.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   }
// );
