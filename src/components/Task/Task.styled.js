import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';

export const TaskContainer = styled.div`
  border: 2px solid #ccc;
`;

export const UpdateTitle = styled.p`
  position: absolute;
  bottom: 2px;
  right: 2px;
`;

export const DeleteTaskButton = styled(CloseIcon)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  :hover {
    color: red;
    cursor: pointer;
  }
`;
