import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

export const CardContainer = styled.div`
  height: 100%;
`;

export const StyleCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  height: 100%;
  padding: 10px 10px;
  background-color: #cccccc;
  border-radius: 3px;
`;

export const DeleteButton = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const CardTitle = styled.h2`
  width: 90%;
  overflow: hidden;
`;

export const TaskWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
