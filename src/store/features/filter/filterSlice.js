import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ''},
  reducers: {
    setFilter: (state, action) => {
      return {
        ...state.filter,
        value: action.payload
      }
    },
    removeFilter: (state, action) => {
      return {
        ...state.filter,
        value: ''
      }
    }
  }
});

export const { setFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
