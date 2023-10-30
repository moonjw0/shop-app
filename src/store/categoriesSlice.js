import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories', 
  async(thunkAPI) => {
    try{
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      // console.log('categories response', response.data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectedValue("에러");
    }
})

const initialState = {
  status:"",
  categories: ['All'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.status = 'success';
      state.categories = [...state.categories, ...action.payload];
    })
    .addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    })
  }
})
export default categoriesSlice.reducer;
