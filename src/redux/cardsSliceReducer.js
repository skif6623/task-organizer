export const fetchCardsFulfilledReducer = (state, action) => {
  state.cards = action.payload;
};

export const addNewCardFulfilledReducer = (state, action) => {
  state.cards.push(action.payload);
};

export const deleteCardFulfilledReducer = (state, action) => {
  const index = state.cards.findIndex(item => item._id === action.payload._id);
  state.cards.splice(index, 1);
};

export const addNewTaskFulfilledReducer = (state, action) => {
  const oldCardIndex = state.cards.findIndex(
    item => item._id === action.payload._id
  );
  state.cards.splice(oldCardIndex, 1, action.payload);
};

export const deleteTaskByIdFulfilledReducer = (state, action) => {
  const oldCardIndex = state.cards.findIndex(
    item => item._id === action.payload._id
  );
  state.cards.splice(oldCardIndex, 1, action.payload);
};

export const dragUpdateFulfilledReducer = (state, action) => {
  const oldCardIndex = state.cards.findIndex(
    item => item._id === action.payload._id
  );
  state.cards.splice(oldCardIndex, 1, action.payload);
};

export const dragUpdateManyFulfilledReducer = (state, action) => {
  const endCard = action.payload[0];
  const startCard = action.payload[1];

  const cards = [...state.cards];
  const startCardIndex = cards.findIndex(item => item._id === startCard._id);
  const endCardIndex = cards.findIndex(item => item._id === endCard._id);
  cards.splice(startCardIndex, 1);
  cards.splice(startCardIndex, 0, { ...startCard });
  cards.splice(endCardIndex, 1);
  cards.splice(endCardIndex, 0, { ...endCard });

  state.cards = cards;
};
