import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'redux/operations';

import { Task } from '../Task/Task';
import { AddTaskButton } from 'components/AddTaskButton/AddTaskButton';
import { AddForm } from 'components/AddForm/AddForm';

import { Droppable } from 'react-beautiful-dnd';

import {
  CardContainer,
  StyleCard,
  DeleteButton,
  CardTitle,
  TaskWrapper,
} from './Card.styled';

export const Card = ({ title, tasks, cardId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  return (
    <Droppable droppableId={`${cardId}`}>
      {provided => (
        <CardContainer>
          <StyleCard {...provided.droppableProps} ref={provided.innerRef}>
            <DeleteButton
              onClick={() => {
                dispatch(deleteCard(cardId));
              }}
            />
            <CardTitle>{title}</CardTitle>
            <TaskWrapper>
              {tasks.map(({ _id, text, updatedAt }, index) => (
                <Task
                  key={_id}
                  taskId={_id}
                  text={text}
                  index={index}
                  cardId={cardId}
                  updated={updatedAt}
                />
              ))}
            </TaskWrapper>
            {!isOpen && <AddTaskButton open={openFormHandler} />}
            {isOpen && (
              <AddForm
                cardId={cardId}
                type="new task"
                close={closeFormHandler}
              />
            )}
            {provided.placeholder}
          </StyleCard>
        </CardContainer>
      )}
    </Droppable>
  );
};
