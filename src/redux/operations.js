import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640857608ee73db92e3dfa49.mockapi.io';

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cards');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewCard = createAsyncThunk(
  'cards/addNewCard',
  async ({ title, items }, thunkAPI) => {
    try {
      const response = await axios.post('/cards', { title, items });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  'cards/addNewTask',
  async ({ items, id }, thunkAPI) => {
    try {
      const response = await axios.put(`/cards/${id}`, { items });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
