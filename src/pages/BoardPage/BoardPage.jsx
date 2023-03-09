import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectList } from 'redux/selectors';
import { fetchCards } from 'redux/operations';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { CardItem } from 'components/CardItem/CardItem';
import { AddCardButton } from 'components/AddCardButton/AddCardButton';
import { ECardList } from './BoardPage.styled';
import { dragHappened } from 'redux/actions';

export const BoardPage = () => {
  const lists = useSelector(selectList);
  const id = 'all';

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
        result.destination.index,
        result.draggableId,
        result.type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h1>My Board</h1>
      <Droppable droppableId={`${id}`} direction="horizontal" type="list">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <ECardList>
              {lists.map(({ title, id, items }, index) => (
                <CardItem
                  key={id}
                  title={title}
                  cards={items}
                  id={id}
                  index={index}
                />
              ))}
              {provided.placeholder}
              <AddCardButton />
            </ECardList>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};