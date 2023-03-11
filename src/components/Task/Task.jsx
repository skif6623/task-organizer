import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskById } from 'redux/operations';

import { CardContent, Typography, Card } from '@mui/material';

import { Draggable } from 'react-beautiful-dnd';

import { TaskContainer, DeleteTaskButton, UpdateTitle } from './Task.styled';

export function Task({ text, taskId, index, cardId, updated }) {
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={`${taskId}`} index={index}>
      {provided => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography>{text}</Typography>
              <UpdateTitle>час</UpdateTitle>
              <DeleteTaskButton
                onClick={() => {
                  dispatch(deleteTaskById({ cardId, taskId }));
                }}
              />
            </CardContent>
          </Card>
        </TaskContainer>
      )}
    </Draggable>
  );
}
