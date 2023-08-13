import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    display: false,
    msg: ''
  },
  reducers: {
    showNotification: (state, action) => {
      return {
        ...state,
        display: true,
        msg: action.payload
      }
    },
    closeNotication: (state, action) => {
      return {
        ...state,
        display: false,
        msg: ''
      }
    }
  }
});

export const { showNotification, closeNotication } = notificationSlice.actions;

export default notificationSlice.reducer;
