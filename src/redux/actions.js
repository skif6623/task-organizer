import { createAction } from '@reduxjs/toolkit';

export const dragHappened = createAction(
  'dragHappened',
  (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd
  ) => {
    return {
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      },
    };
  }
);
