import { createSlice } from '@reduxjs/toolkit';

export const typeSlice = createSlice({
  name: 'type',
  initialState: {
    success: false,
    warn: false,
    error: false
  },
  reducers: {
    setSuccess: (state, action) => {
      return {
        ...state,
        success: true
      }
    },
    setWarn: (state, action) => {
      return {
        ...state,
        warn: true
      }
    },
    setError: (state, action) => {
      return {
        ...state,
        error: true
      }
    },
    clearType: (state, action) => {
      return {
        ...state,
        success: false,
        warn: false,
        error: false
      }
    }
  }
});

export const { setSuccess, setWarn, setError, clearType } = typeSlice.actions;

export default typeSlice.reducer;
