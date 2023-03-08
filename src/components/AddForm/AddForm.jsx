import React from 'react';
import { Card, Box, IconButton } from '@mui/material';
import { ETextArea, EAddBtn } from './AddForm.styled';
import CloseIcon from '@mui/icons-material/Close';

export const AddForm = ({ type, close }) => {
  return (
    <Box>
      <Card>
        <ETextArea
          autoFocus
          placeholder={`enter a ${type} name`}
          aria-label={`enter new ${type}`}
          minRows={3}
          onBlur={close}
        />
      </Card>
      <Box sx={{ marginTop: '10px' }}>
        <EAddBtn type="button">{`Add ${type}`}</EAddBtn>
        <IconButton aria-label="close" onClick={() => close()}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
