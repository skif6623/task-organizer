import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewCard } from 'redux/operations';
import { addTask } from 'redux/listsSlice';
import { Card, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ETextArea, EAddBtn } from './AddForm.styled';
import { nanoid } from 'nanoid';

export const AddForm = ({ type, close, id }) => {
  const [value, setValue] = useState('');
  const [task, setTask] = useState('');

  const dispatch = useDispatch();

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
    const newItem = { id: nanoid(), text: task };
    dispatch(addTask({ id, newItem }));
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
