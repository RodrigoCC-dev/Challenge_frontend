import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [
    {id: 1, name: 'POST 1', description: 'Hola como estaás'},
    {id: 2, name: 'POST 2', description: 'Hola como estaaaaaaaás'},
    {id: 3, name: 'POST 3', description: 'Hola como estaaaaánnn'}
  ],
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
