import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setList: (state, action) => {
      return [
        ...state,
        ...action.payload
      ]
    },
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { setList, addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
