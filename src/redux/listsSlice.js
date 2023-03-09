import { createSlice } from '@reduxjs/toolkit';
import { fetchCards, addNewCard } from './operations';
import { dragHappened } from './actions';
import produce from 'immer';

const initialState = {
  cards: [],
};

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addTask(state, action) {
      const { id, newItem } = action.payload;
      const cardIndex = state.cards.findIndex(card => card.id === id);

      if (cardIndex >= 0) {
        const newItems = produce(state.cards[cardIndex].items, draft => {
          draft.push(newItem);
        });
        state.cards[cardIndex].items = newItems;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(addNewCard.fulfilled, (state, action) => {
        console.log(state);
        state.cards.push(action.payload);
      })
      .addCase(dragHappened, (state, action) => {
        const {
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          // draggableId,
          type,
        } = action.payload;
        // перетягування карток
        if (type === 'list') {
          const cards = [...state.cards];
          const card = cards.splice(droppableIndexEnd, 1);
          cards.splice(droppableIdEnd, 0, ...card);
          state.cards = cards;
        }

        // Перетягування в карті
        if (droppableIdStart === droppableIdEnd) {
          const cards = [...state.cards];
          const cardIndex = cards.findIndex(
            card => card.id === droppableIdStart
          );
          const card = cards[cardIndex];
          const task = card.items.splice(droppableIndexStart, 1);
          card.items.splice(droppableIndexEnd, 0, ...task);
          state.cards = cards;
        }

        // Перетягування між картками
        if (droppableIdStart !== droppableIdEnd) {
          const cards = [...state.cards];

          const cardStartIdx = cards.findIndex(
            card => card.id === droppableIdStart
          );
          const cardStart = cards[cardStartIdx];
          const task = cardStart.items.splice(droppableIndexStart, 1);

          const cardEndIdx = cards.findIndex(
            card => card.id === droppableIdEnd
          );
          const cardEnd = cards[cardEndIdx];
          cardEnd.items.splice(droppableIndexEnd, 0, ...task);
          state.cards = cards;
        }
      });
  },
});

export const { addTask } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
