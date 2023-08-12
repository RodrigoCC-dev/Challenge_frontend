import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      // Actualizar según corresponda
      state.pop(action.payload);
    }
  }
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
