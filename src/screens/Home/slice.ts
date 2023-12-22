import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<any>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<any>) => {
      state.selectedCategory = action.payload;
    },
  },
});
