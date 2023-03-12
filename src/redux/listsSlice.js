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

const initialState = {
  cards: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(addNewCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        const index = state.cards.findIndex(
          item => item._id === action.payload._id
        );
        state.cards.splice(index, 1);
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        const oldCardIndex = state.cards.findIndex(
          item => item._id === action.payload._id
        );
        state.cards.splice(oldCardIndex, 1, action.payload);
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        const oldCardIndex = state.cards.findIndex(
          item => item._id === action.payload._id
        );
        state.cards.splice(oldCardIndex, 1, action.payload);
      })
      .addCase(dragUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        const oldCardIndex = state.cards.findIndex(
          item => item._id === action.payload._id
        );
        state.cards.splice(oldCardIndex, 1, action.payload);
      })
      .addCase(dragUpdateMany.fulfilled, (state, action) => {
        const endCard = action.payload[0];
        const startCard = action.payload[1];

        const cards = [...state.cards];
        const startCardIndex = cards.findIndex(
          item => item._id === startCard._id
        );
        const endCardIndex = cards.findIndex(item => item._id === endCard._id);
        cards.splice(startCardIndex, 1);
        cards.splice(startCardIndex, 0, { ...startCard });
        cards.splice(endCardIndex, 1);
        cards.splice(endCardIndex, 0, { ...endCard });

        state.cards = cards;
      });
  },
});

export const listsReducer = listsSlice.reducer;
