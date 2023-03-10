import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectList } from 'redux/selectors';
import { deleteTask } from 'redux/operations';
import { CardContent, Typography, Card } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { ECardContainer, ECardDelete } from './Task.styled';

export function Task({ text, id, index, cardId }) {
  const dispatch = useDispatch();
  const lists = useSelector(selectList);
  const copyLists = lists.slice();
  const cardIdx = copyLists.findIndex(item => item._id === cardId);
  const currentCard = copyLists[cardIdx];
  const currentTasks = currentCard.items.filter(item => item.id !== id);

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {provided => (
        <ECardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography>{text}</Typography>
              <ECardDelete
                onClick={() => {
                  dispatch(deleteTask({ cardId, items: [...currentTasks] }));
                }}
              />
            </CardContent>
          </Card>
        </ECardContainer>
      )}
    </Draggable>
  );
}
