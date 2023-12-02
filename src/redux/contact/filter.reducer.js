
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filterValue: '',
// };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     setFilterValue: (state, action) => {
//       state.filterValue = action.payload;
//     },
//   },
// });

// export const { setFilterValue } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

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
