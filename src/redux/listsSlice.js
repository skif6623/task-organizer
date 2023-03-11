import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCards,
  addNewCard,
  deleteCard,
  addNewTask,
  deleteTaskById,
} from './operations';
import { dragHappened } from './actions';

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
      .addCase(dragHappened, (state, action) => {
        const {
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
        } = action.payload;

        if (droppableIdStart === droppableIdEnd) {
          const cards = [...state.cards];
          const cardIndex = cards.findIndex(
            card => card._id === droppableIdStart
          );

          const card = cards[cardIndex];
          const task = card.items.splice(droppableIndexStart, 1);
          card.items.splice(droppableIndexEnd, 0, ...task);
          state.cards = cards;
        }

        if (droppableIdStart !== droppableIdEnd) {
          const cards = [...state.cards];

          const cardStartIdx = cards.findIndex(
            card => card._id === droppableIdStart
          );
          const cardStart = cards[cardStartIdx];
          const task = cardStart.items.splice(droppableIndexStart, 1);

          const cardEndIdx = cards.findIndex(
            card => card._id === droppableIdEnd
          );
          const cardEnd = cards[cardEndIdx];
          cardEnd.items.splice(droppableIndexEnd, 0, ...task);
          state.cards = cards;
        }
      });
  },
});

export const listsReducer = listsSlice.reducer;