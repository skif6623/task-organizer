import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavButton = styled(NavLink)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  background-color: white;
  border-radius: 10px;
  color: black;

  &.active {
    color: #1976d2;
  }
`;
