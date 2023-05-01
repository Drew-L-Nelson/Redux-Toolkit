import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})






// import counterReducer from '../features/counter/counterSlice'; FOR CHAPTER 1

// FOR CHAPTER 1
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   }
// })