import {configureStore} from '@reduxjs/toolkit';
import {favSlice} from './slice';
export const store = configureStore({
  reducer: {
    [favSlice.name]: favSlice.reducer,
  },
});
