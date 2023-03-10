import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from 'redux/selectors';
import { fetchCards } from 'redux/operations';
import { DragDropContext } from 'react-beautiful-dnd';

import { CardItem } from 'components/CardItem/CardItem';
import { AddCardButton } from 'components/AddCardButton/AddCardButton';
import { ECardList } from './BoardPage.styled';
import { dragHappened } from 'redux/actions';

export const BoardPage = () => {
  const lists = useSelector(selectList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    dispatch(
      dragHappened(
        result.source.droppableId,
        result.destination.droppableId,
        result.source.index,
        result.destination.index
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>My Board</h1>
      <ECardList>
        {lists.map(({ title, _id, items }) => (
          <CardItem key={_id} title={title} cards={items} id={_id} />
        ))}
        <AddCardButton />
      </ECardList>
    </DragDropContext>
  );
};
