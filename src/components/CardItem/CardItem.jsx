import React from 'react';
import { ECardItem } from './CardItem.styled';
import { Task } from '../Task/Task';

export const CardItem = ({ title, cards }) => {
  return (
    <ECardItem>
      <h2>{title}</h2>
      {cards.map(({ id, text }) => (
        <Task key={id} text={text} />
      ))}
      <Task />
    </ECardItem>
  );
};
