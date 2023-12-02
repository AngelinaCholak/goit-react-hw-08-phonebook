
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions; 

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