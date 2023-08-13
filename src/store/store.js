import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import filterSlice from './features/filter/filterSlice';
import notificationSlice from './features/notification/notificationSlice';
import typeSlice from './features/type/typeSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    filter: filterSlice,
    notification: notificationSlice,
    type: typeSlice
  }
});
