import React from 'react';

import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { SortBtnWrapper } from './SortTasks.styled';

export const SortTasks = ({ changeSort }) => {
  return (
    <SortBtnWrapper>
      <IconButton
        color="success"
        size="small"
        aria-label="ascending"
        onClick={() => changeSort('up')}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <IconButton
        color="error"
        size="small"
        aria-label="descending"
        onClick={() => changeSort('down')}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </SortBtnWrapper>
  );
};
