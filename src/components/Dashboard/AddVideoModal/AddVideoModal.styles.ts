import { Box, Stack, styled } from '@mui/material';

import { theme } from '@/styles/theme';

export const ModalContent = styled(Box)`
  width: 420px;
  padding: 1rem 2rem;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s;
  background-color: ${theme.palette.background.paper};
  &:hover{
    border-bottom: 3px solid #6430ff;
  }
`;

export const AddVideoWrapper = styled(Stack)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
