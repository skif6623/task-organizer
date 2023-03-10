import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'redux/operations';

import { Task } from '../Task/Task';
import { AddTaskButton } from 'components/AddTaskButton/AddTaskButton';
import { AddForm } from 'components/AddForm/AddForm';

import { Droppable } from 'react-beautiful-dnd';

import {
  ECardItem,
  ECardContainer,
  EDeleteButton,
  ECardTitle,
} from './CardItem.styled';

export const CardItem = ({ title, cards, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  return (
    <Droppable droppableId={`${id}`}>
      {provided => (
        <ECardContainer>
          <ECardItem {...provided.droppableProps} ref={provided.innerRef}>
            <EDeleteButton
              onClick={() => {
                dispatch(deleteCard(id));
              }}
            />
            <ECardTitle>{title}</ECardTitle>
            {cards.map(({ id, text }, index) => (
              <Task key={id} id={id} text={text} index={index} />
            ))}
            {!isOpen && <AddTaskButton open={openFormHandler} />}
            {isOpen && (
              <AddForm id={id} type="new task" close={closeFormHandler} />
            )}
            {provided.placeholder}
          </ECardItem>
        </ECardContainer>
      )}
    </Droppable>
  );
};
