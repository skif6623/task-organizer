import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';

export const ECardContainer = styled.div`
  height: 110%;
`;

export const EDeleteButton = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const ECardTitle = styled.h2`
  width: 90%;
  overflow: hidden;
`;

export const ECardItem = styled.div`
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
