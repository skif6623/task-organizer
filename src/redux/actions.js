import { createAction } from '@reduxjs/toolkit';

export const dragHappened = createAction(
  'dragHappened',
  (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    // draggableId,
    type
  ) => {
    return {
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        // draggableId,
        type,
      },
    };
  }
);
