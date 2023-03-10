import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectList } from 'redux/selectors';
import { addNewCard, addNewTask } from 'redux/operations';

import { Card, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ETextArea, EAddBtn } from './AddForm.styled';
import { nanoid } from 'nanoid';

export const AddForm = ({ type, close, id }) => {
  const [value, setValue] = useState('');
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const cards = useSelector(selectList);
  const currentCard = cards.find(item => item._id === id);

  const resetForm = type => {
    type === 'card' ? setValue('') : setTask('');
    close();
  };

  const onSubmitCardHandler = e => {
    e.preventDefault();
    const newCard = { title: value, items: [] };
    dispatch(addNewCard(newCard));
    resetForm();
  };

  const onSubmitTaskHandler = e => {
    e.preventDefault();
    const newTask =
      currentCard.items.length > 0
        ? {
            id,
            items: [...currentCard.items, { id: nanoid(), text: task }],
          }
        : { id, items: [{ id: nanoid(), text: task }] };
    dispatch(addNewTask(newTask));
    resetForm();
  };

  return (
    <form
      onSubmit={type === 'new task' ? onSubmitTaskHandler : onSubmitCardHandler}
    >
      <Card>
        <ETextArea
          autoFocus
          placeholder={`enter a ${type} name`}
          aria-label={`enter new ${type}`}
          minRows={3}
          value={type === 'card' ? value : task}
          onChange={e => {
            type === 'card'
              ? setValue(e.target.value)
              : setTask(e.target.value);
          }}
        />
      </Card>
      <Box sx={{ marginTop: '10px' }}>
        <EAddBtn type="submit">{`Add ${type}`}</EAddBtn>
        <IconButton aria-label="close" onClick={() => close()}>
          <CloseIcon />
        </IconButton>
      </Box>
    </form>
  );
};
