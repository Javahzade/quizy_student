import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {categoriesSlice} from '../screens/Home/slice';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
