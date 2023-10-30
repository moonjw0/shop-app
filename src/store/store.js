import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    products: productsSlice,
  },
});

export default store;
