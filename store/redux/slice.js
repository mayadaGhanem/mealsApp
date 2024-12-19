import {createSlice} from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'favoriteMeals',
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.ids = state.ids.filter(
        meal => meal.id !== action.payload,
      );
    },
  },
});
export const {addFavorite, removeFavorite} = favSlice.actions;
