import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCards,
  addNewCard,
  deleteCard,
  addNewTask,
  deleteTaskById,
  dragUpdate,
  dragUpdateMany,
} from './operations';

import {
  fetchCardsFulfilledReducer,
  addNewCardFulfilledReducer,
  deleteCardFulfilledReducer,
  addNewTaskFulfilledReducer,
  deleteTaskByIdFulfilledReducer,
  dragUpdateFulfilledReducer,
  dragUpdateManyFulfilledReducer,
} from './cardsSliceReducer';

const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCards.fulfilled, fetchCardsFulfilledReducer)
      .addCase(addNewCard.fulfilled, addNewCardFulfilledReducer)
      .addCase(deleteCard.fulfilled, deleteCardFulfilledReducer)
      .addCase(addNewTask.fulfilled, addNewTaskFulfilledReducer)
      .addCase(deleteTaskById.fulfilled, deleteTaskByIdFulfilledReducer)
      .addCase(dragUpdate.fulfilled, dragUpdateFulfilledReducer)
      .addCase(dragUpdateMany.fulfilled, dragUpdateManyFulfilledReducer);
  },
});

export const cardsReducer = cardsSlice.reducer;
