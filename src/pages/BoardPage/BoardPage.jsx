import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from 'redux/selectors';
import { fetchCards } from 'redux/operations';

import { DragDropContext } from 'react-beautiful-dnd';
import { dragUpdate, dragUpdateMany } from 'redux/operations';

import { Card } from 'components/Card/Card';
import { AddCardButton } from 'components/AddCardButton/AddCardButton';

import { CardList, BoardTitle, BoardWrapper } from './BoardPage.styled';

export const BoardPage = () => {
  const cards = useSelector(selectList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const onDragEnd = result => {
    const droppableIdStart = result.source.droppableId;
    const droppableIdEnd = result.destination.droppableId;
    const droppableIndexStart = result.source.index;
    const droppableIndexEnd = result.destination.index;

    if (!result.destination) {
      return;
    }

    if (droppableIdStart === droppableIdEnd) {
      const copyCards = JSON.parse(JSON.stringify(cards));
      const cardIndex = copyCards.findIndex(
        card => card._id === droppableIdStart
      );
      const card = copyCards[cardIndex];
      const task = card.items.splice(droppableIndexStart, 1);
      card.items.splice(droppableIndexEnd, 0, ...task);
      const updatedCard = copyCards[cardIndex];
      dispatch(dragUpdate({ cardId: droppableIdStart, updatedCard }));
    }

    if (droppableIdStart !== droppableIdEnd) {
      const copyCards = JSON.parse(JSON.stringify(cards));

      const cardStart = copyCards.find(card => card._id === droppableIdStart);
      const cardStartId = cardStart._id;
      const deletedTask = cardStart.items.splice(droppableIndexStart, 1);
      const taskStart = cardStart.items;

      const cardEnd = copyCards.find(card => card._id === droppableIdEnd);
      const cardEndId = cardEnd._id;
      cardEnd.items.splice(droppableIndexEnd, 0, ...deletedTask);
      const taskEnd = cardEnd.items;

      dispatch(dragUpdateMany({ cardStartId, cardEndId, taskStart, taskEnd }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardWrapper>
        <BoardTitle>My Board</BoardTitle>
        <CardList>
          {cards.map(({ title, _id, items }) => (
            <Card key={_id} title={title} tasks={items} cardId={_id} />
          ))}
          <AddCardButton />
        </CardList>
      </BoardWrapper>
    </DragDropContext>
  );
};
