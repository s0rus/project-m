import { Avatar, Box, Card, CardContent, Stack, styled } from '@mui/material';
import { gradients, theme } from '@/styles/theme';

export const VideoCardWrapper = styled(Card)`
  height: 100%;
  min-height: 100px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: ${gradients.gradientPaper};
`;

export const VideoContent = styled(CardContent)`
  width: 100%;
  display: flex;
  font-size: 20px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const VideoBox = styled(Box)`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const VideoDetails = styled(Stack)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddedByWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.8rem;
  background-color: ${theme.palette.background.paper};
  border-radius: 4px;
  padding-right: 0.8rem;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 4px;
`;

export const EmptyVideoCard = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0rem 1rem;
  justify-content: center;
  flex-flow: column nowrap;
`;
