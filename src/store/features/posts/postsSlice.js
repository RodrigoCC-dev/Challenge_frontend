import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {id: 4, name: 'POST 1', description: 'Hola como estaás'},
    {id: 5, name: 'POST 2', description: 'Hola como estaaaaaaaás'},
    {id: 6, name: 'POST 3', description: 'Hola como estaaaaánnn'}
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
