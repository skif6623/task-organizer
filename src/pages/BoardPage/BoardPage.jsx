import React from 'react';
import { useSelector } from 'react-redux';

import { CardItem } from 'components/CardItem/CardItem';
import { AddCardButton } from 'components/AddCardButton/AddCardButton';
import { ECardList } from './BoardPage.styled';

export const BoardPage = () => {
  const lists = useSelector(state => state.lists);

  return (
    <>
      <h1>My Board</h1>
      <ECardList>
        {lists.map(({ title, id, items }) => (
          <CardItem key={id} title={title} cards={items} />
        ))}
        <AddCardButton />
      </ECardList>
    </>
  );
};
