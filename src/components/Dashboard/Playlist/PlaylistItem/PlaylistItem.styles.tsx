import { Card, styled } from '@mui/material';

export const PlaylistItemCard = styled(Card)`
  display: flex;
  width: 100%;
  transition: background 1s;
  background: #0E0E10;
  &:hover{
    background: #18181b;
    border-right: 2px solid #6430ff;
  }
`;
