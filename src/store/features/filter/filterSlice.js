import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    removeFilter: (state, action) => {
      state.filter = ''
    }
  }
});

export const { setFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
