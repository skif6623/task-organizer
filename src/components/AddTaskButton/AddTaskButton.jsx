import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { EAddButton } from './AddTaskButton.styled';

export const AddTaskButton = ({ open }) => {
  return (
    <EAddButton>
      <Box display="flex" alignItems="center" onClick={open}>
        <AddIcon />
        <p>Add task</p>
      </Box>
    </EAddButton>
  );
};
