import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import filterSlice from './features/filter/filterSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    filter: filterSlice
  }
});
