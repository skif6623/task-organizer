import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://db-cards.onrender.com';

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/cards');
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
      const response = await axios.post('/api/cards', { title, items });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewTask = createAsyncThunk(
  'cards/addNewTask',
  async ({ id, items }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/cards/${id}/items`, {
        items: items,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/cards/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'cards/deleteTask',
  async ({ cardId, items }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/cards/${cardId}/items`, {
        items: items,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
