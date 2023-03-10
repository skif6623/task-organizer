import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';

export const ECardContainer = styled.div`
  border: 2px solid #ccc;
`;

export const ECardDelete = styled(CloseIcon)`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 15px;
  height: 15px;
  color: red;
`;
