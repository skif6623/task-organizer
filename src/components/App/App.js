import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { BoardPage } from 'pages/BoardPage/BoardPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Route>
    </Routes>
  );
};
