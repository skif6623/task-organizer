import styled from '@emotion/styled';

export const BoardWrapper = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 64px);
`;

export const CardList = styled.div`
  display: flex;
  gap: 20px;
`;

export const BoardTitle = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;
