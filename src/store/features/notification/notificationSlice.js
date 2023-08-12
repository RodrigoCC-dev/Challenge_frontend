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
    autoCloseNotification: (state, action) => {
      const newState = {...state, display: false, msg: ''}
      return setTimeout(() => newState, 5000);
    }
  }
});

export const { showNotification, autoCloseNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
