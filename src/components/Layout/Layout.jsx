import React from 'react';
import { Outlet } from 'react-router-dom';
import { ResponsiveAppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};
