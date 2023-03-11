import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { AddButtonWrapper } from './AddTaskButton.styled';

export const AddTaskButton = ({ open }) => {
  return (
    <AddButtonWrapper>
      <Box display="flex" aria-label="add" alignItems="center" onClick={open}>
        <AddIcon />
        <p>Add task</p>
      </Box>
    </AddButtonWrapper>
  );
};
