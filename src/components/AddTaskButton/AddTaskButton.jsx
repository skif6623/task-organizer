import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';

export const AddTaskButton = ({ open }) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" onClick={open}>
        <AddIcon />
        <p>Add task</p>
      </Box>
    </Box>
  );
};
