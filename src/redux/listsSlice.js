import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'First card',
    id: 0,
    items: [
      {
        id: 0,
        text: 'Емі це собака яка любить спати',
      },
      {
        id: 1,
        text: 'Ще цю собаку треба годувати',
      },
    ],
  },
  {
    title: 'Second card',
    id: 1,
    items: [
      {
        id: 0,
        text: 'Вигуляти собаку',
      },
      {
        id: 1,
        text: 'Здати тестове завдання',
      },
      {
        id: 2,
        text: 'Не кусатися',
      },
    ],
  },
  {
    title: 'Third card',
    id: 3,
    items: [
      {
        id: 0,
        text: 'Вигуляти собаку',
      },
      {
        id: 1,
        text: 'Здати тестове завдання',
      },
      {
        id: 2,
        text: 'Не кусатися',
      },
      {
        id: 3,
        text: 'Не кусатися',
      },
    ],
  },
];

const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    getLists(state, action) {
      return action.payload;
    },
  },
});

export const { getLists } = listsSlice.actions;
export const listsReducer = listsSlice.reducer;
