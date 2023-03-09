import * as React from 'react';
import { CardContent, Typography, Card } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { ECardContainer } from './Task.styled';

export function Task({ text, id, index }) {
  return (
    <Draggable draggableId={`${id}`} index={index}>
      {provided => (
        <ECardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        </ECardContainer>
      )}
    </Draggable>
  );
}
