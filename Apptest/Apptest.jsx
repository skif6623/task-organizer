// import React, { useState } from 'react';

// export const App = () => {
//   const [boards, setBoards] = useState([
//     {
//       id: 1,
//       title: 'Зробити',
//       items: [
//         { id: 1, title: 'Піти в магазин' },
//         { id: 2, title: 'Викинути сміття' },
//         { id: 3, title: 'Покусати собаку' },
//       ],
//     },
//     {
//       id: 2,
//       title: 'Перевірити',
//       items: [
//         { id: 1, title: 'Купити кашу собаці' },
//         { id: 2, title: 'Погуляти собаку' },
//         { id: 3, title: 'Почесати собаку' },
//       ],
//     },
//     {
//       id: 3,
//       title: 'Зроблено',
//       items: [
//         { id: 1, title: 'Пропилососити' },
//         { id: 2, title: 'Зробити каву' },
//         { id: 3, title: 'застелити ліжко' },
//       ],
//     },
//   ]);
//   const [currentBoard, setCurrentBoard] = useState(null);
//   const [currentItem, setCurrentItem] = useState(null);

//   const dragOverHandler = e => {
//     e.preventDefault();
//     if (e.target.className === 'item') {
//       e.target.style.boxShadow = '0 4px 3px gray';
//     }
//   };

//   const dragLeaveHandler = e => {
//     e.target.style.boxShadow = 'none';
//   };

//   const dragStartHandler = (e, board, item) => {
//     setCurrentBoard(board);
//     setCurrentItem(item);
//   };

//   const dragEndHandler = e => {
//     e.target.style.boxShadow = 'none';
//   };

//   const dropHandler = (e, board, item) => {
//     e.preventDefault();
//     const currentIndex = currentBoard.items.indexOf(currentItem);
//     currentBoard.items.splice(currentIndex, 1);
//     const dropIndex = board.items.indexOf(item);
//     board.items.splice(dropIndex + 1, 0, currentItem);
//     setBoards(
//       boards.map(b => {
//         if (b.id === board.id) {
//           return board;
//         }
//         if (b.id === currentBoard.id) {
//           return currentBoard;
//         }
//         return b;
//       })
//     );
//   };

//   const dropCardHandler = (e, board) => {
//     const currentIndex = currentBoard.items.indexOf(currentItem);
//     currentBoard.items.splice(currentIndex, 1);
//     boards.items.push(currentItem);
//     setBoards(
//       boards.map(b => {
//         if (b.id === board.id) {
//           return board;
//         }
//         if (b.id === currentBoard.id) {
//           return currentBoard;
//         }
//         return b;
//       })
//     );
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '50px',
//       }}
//     >
//       {boards.map(board => (
//         <div
//           onDragOver={e => dragOverHandler(e)}
//           onDrop={e => dropCardHandler(e, board)}
//           style={{
//             width: '300px',
//             padding: '30px',
//             textAlign: 'center',
//             border: '5px solid black',
//             borderRadius: '20px',
//           }}
//           key={board.id}
//         >
//           <h1>{board.title}</h1>
//           {board.items.map(item => (
//             <div
//               key={item.id}
//               className="item"
//               style={{
//                 padding: '15px',
//                 marginBottom: '30px',
//                 border: '2px solid orange',
//                 borderRadius: '5px',
//               }}
//               onDragOver={e => dragOverHandler(e)}
//               onDragLeave={e => dragLeaveHandler(e)}
//               onDragStart={e => dragStartHandler(e, board, item)}
//               onDragEnd={e => dragEndHandler(e)}
//               onDrop={e => dropHandler(e, board, item)}
//               draggable={true}
//             >
//               {item.title}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// import { useState } from 'react';

// export const App = () => {
//   const [cardList, setCardList] = useState([
//     { id: 1, order: 3, text: 'Карточка 3' },
//     { id: 2, order: 1, text: 'Карточка 1' },
//     { id: 3, order: 2, text: 'Карточка 2' },
//     { id: 4, order: 4, text: 'Карточка 4' },
//   ]);
//   const [currentCard, setCurrentCard] = useState(null);

//   const dragStartHandler = (e, card) => {
//     console.log('drag', card);
//     setCurrentCard(card);
//   };

//   const dragLeaveHandler = e => {
//     e.target.style.backgroundColor = 'white';
//   };

//   const dragEndHandler = e => {
//     e.target.style.backgroundColor = 'white';
//   };

//   const dragOverHandler = e => {
//     e.preventDefault();
//     e.target.style.backgroundColor = 'red';
//   };

//   const dropHandler = (e, card) => {
//     e.preventDefault();
//     setCardList(
//       cardList.map(c => {
//         if (c.id === card.id) {
//           return { ...c, order: currentCard.order };
//         }
//         if (c.id === currentCard.id) {
//           return { ...c, order: card.order };
//         }
//         return c;
//       })
//     );
//     e.target.style.backgroundColor = 'white';
//   };

//   const sortCards = (a, b) => {
//     return a.order > b.order ? 1 : -1;
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '50px',
//       }}
//     >
//       {cardList.sort(sortCards).map(card => (
//         <div
//           key={card.id}
//           style={{
//             width: '300px',
//             height: '500px',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             border: '5px solid black',
//             borderRadius: '20px',
//           }}
//           draggable={true}
//           onDragStart={e => dragStartHandler(e, card)}
//           onDragLeave={e => dragLeaveHandler(e)}
//           onDragEnd={e => dragEndHandler(e)}
//           onDragOver={e => dragOverHandler(e)}
//           onDrop={e => dropHandler(e, card)}
//         >
//           {card.text}
//         </div>
//       ))}
//     </div>
//   );
// };
