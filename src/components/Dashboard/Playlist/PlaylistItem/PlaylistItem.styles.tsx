import { Card, styled } from '@mui/material';

export const PlaylistItemCard = styled(Card)`
  display: flex;
  width: 100%;
  transition: 1s;
  background: #0E0E10;
  &:hover{
    background: rgba(100, 48, 255, 0.04);
  }
`;
