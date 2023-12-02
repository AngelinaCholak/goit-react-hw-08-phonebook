// import { createSelector } from '@reduxjs/toolkit/dist';

export const selectContacts = state => state.phonebook.contacts;
export const selectContactsIsLoading = state => state.phonebook.isLoading;
export const selectContactsError = state => state.phonebook.error;


export const selectFilter = state => state.phonebook.filter;


