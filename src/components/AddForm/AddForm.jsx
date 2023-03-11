import { useDispatch } from 'react-redux';
import { addNewCard, addNewTask } from 'redux/operations';

import { Card, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { TextArea, AddButton, Form } from './AddForm.styled';

export const AddForm = ({ type, close, cardId }) => {
  const dispatch = useDispatch();

  const onSubmitCardHandler = e => {
    e.preventDefault();
    const title = e.currentTarget.elements.name.value;
    const newCard = { title, items: [] };
    dispatch(addNewCard(newCard));
    close();
  };

  const onSubmitTaskHandler = e => {
    e.preventDefault();
    const text = e.currentTarget.elements.name.value;
    dispatch(addNewTask({ cardId, text }));
    close();
  };

  return (
    <Form
      type={type}
      onSubmit={type === 'new task' ? onSubmitTaskHandler : onSubmitCardHandler}
    >
      <Card>
        <TextArea
          autoFocus
          placeholder={`enter a ${type} name`}
          aria-label={`enter new ${type}`}
          minRows={3}
          name="name"
          type="text"
        />
      </Card>
      <Box sx={{ marginTop: '10px' }}>
        <AddButton type="submit">{`Add ${type}`}</AddButton>
        <IconButton aria-label="close" onClick={() => close()}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Form>
  );
};
