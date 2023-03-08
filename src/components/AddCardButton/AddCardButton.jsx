import React, { useState } from 'react';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { AddForm } from 'components/AddForm/AddForm';
import { EAddCardBtn } from './AddCardButton.styled';

export const AddCardButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box>
      {!isOpen && (
        <EAddCardBtn onClick={() => setIsOpen(true)}>
          <AddIcon />
          <p>Add Card</p>
        </EAddCardBtn>
      )}
      {isOpen && <AddForm type="card" close={setIsOpen} />}
    </Box>
  );
};
