// import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

// export const getIsLoading = state => state.contacts.isLoading;
// export const getError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normalizedValue = filter.toLowerCase().trim();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedValue)
//     );
//   }
// );
