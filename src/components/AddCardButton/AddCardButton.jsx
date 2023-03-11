import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { AddForm } from 'components/AddForm/AddForm';
import { AddCardBtn, AddCardButtonWrapper } from './AddCardButton.styled';

export const AddCardButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AddCardButtonWrapper>
      {!isOpen && (
        <AddCardBtn onClick={() => setIsOpen(true)}>
          <AddIcon />
          <p>Add Card</p>
        </AddCardBtn>
      )}
      {isOpen && <AddForm type="card" close={setIsOpen} />}
    </AddCardButtonWrapper>
  );
};
