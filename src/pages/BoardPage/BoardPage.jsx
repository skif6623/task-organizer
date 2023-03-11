import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from 'redux/selectors';
import { fetchCards } from 'redux/operations';

import { DragDropContext } from 'react-beautiful-dnd';
import { dragHappened } from 'redux/actions';

import { Card } from 'components/Card/Card';
import { AddCardButton } from 'components/AddCardButton/AddCardButton';

import { CardList, BoardTitle } from './BoardPage.styled';

export const BoardPage = () => {
  const cards = useSelector(selectList);

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
      <BoardTitle>My Board</BoardTitle>
      <CardList>
        {cards.map(({ title, _id, items }) => (
          <Card key={_id} title={title} tasks={items} cardId={_id} />
        ))}
        <AddCardButton />
      </CardList>
    </DragDropContext>
  );
};
