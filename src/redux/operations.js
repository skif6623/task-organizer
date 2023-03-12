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

export const addNewTask = createAsyncThunk(
  'cards/addNewTask',
  async ({ cardId, text }, thunkAPI) => {
    try {
      const response = await axios.post(`/api/cards/${cardId}/items`, { text });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTaskById = createAsyncThunk(
  'cards/deleteTaskById',
  async ({ cardId, taskId }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `/api/cards/${cardId}/items/${taskId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dragUpdate = createAsyncThunk(
  'cards/dragUpdate',
  async ({ cardId, updatedCard }, thunkAPI) => {
    try {
      const response = await axios.put(`/api/cards/${cardId}`, updatedCard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const dragUpdateMany = createAsyncThunk(
  'cards/dragUpdateMany',
  async ({ cardStartId, cardEndId, taskStart, taskEnd }, thunkAPI) => {
    try {
      const response = await axios.put(
        `/api/cards/${cardStartId}/${cardEndId}`,
        { taskStart, taskEnd }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
