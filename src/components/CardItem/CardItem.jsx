import React, { useState } from 'react';
import { ECardItem } from './CardItem.styled';
import { Task } from '../Task/Task';
import { AddTaskButton } from 'components/AddTaskButton/AddTaskButton';
import { AddForm } from 'components/AddForm/AddForm';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export const CardItem = ({ title, cards, id, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={`${id}`}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <ECardItem>
                  <h2>{title}</h2>
                  {cards.map(({ id, text }, index) => (
                    <Task key={id} id={id} text={text} index={index} />
                  ))}
                  {!isOpen && <AddTaskButton open={openFormHandler} />}
                  {isOpen && (
                    <AddForm id={id} type="new task" close={closeFormHandler} />
                  )}
                  {provided.placeholder}
                </ECardItem>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
