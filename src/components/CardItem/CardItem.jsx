import React, { useState } from 'react';
import { ECardItem } from './CardItem.styled';
import { Task } from '../Task/Task';
import { AddTaskButton } from 'components/AddTaskButton/AddTaskButton';
import { AddForm } from 'components/AddForm/AddForm';

export const CardItem = ({ title, cards }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openFormHandler = () => {
    setIsOpen(true);
  };

  const closeFormHandler = () => {
    setIsOpen(false);
  };

  return (
    <ECardItem>
      <h2>{title}</h2>
      {cards.map(({ id, text }) => (
        <Task key={id} text={text} />
      ))}
      {!isOpen && <AddTaskButton open={openFormHandler} />}
      {isOpen && <AddForm type="new task" close={closeFormHandler} />}
    </ECardItem>
  );
};
