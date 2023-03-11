import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/material';

export const Form = styled.form`
  width: ${({ type }) => (type === 'card' ? '300px' : '100%')};
  padding: 5px;
  border: 2px solid #1976d2;
  border-radius: 10px;
`;

export const TextArea = styled(TextareaAutosize)`
  padding: 10px;
  width: 100%;
  resize: none;
  border: none;
  outline: none;
`;

export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background-color: #1861a9;
  }
`;
