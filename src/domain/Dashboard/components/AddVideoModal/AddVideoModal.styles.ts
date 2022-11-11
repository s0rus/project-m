import { Box, Stack, styled } from '@mui/material';

import ReactPlayer from 'react-player';
import { theme,gradients } from '@/styles/theme';

export const ModalContent = styled(Box)`
  width: 420px;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 0.3s;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(48,48,68,1) -10%, rgba(20,23,46,1) 180%);
  border: 2px solid #18181b;
`;

export const AddVideoWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
`;

export const SamplePlayer = styled(ReactPlayer)`
  display: none;
`;

export const ExitButton = styled('div')`
height: 40px;
width: 40px;
color: #18181b;
transition: all 0.3s;
position: absolute;
right: 20px;
top: 20px;
color: white;
cursor: pointer;
background: rgba(0, 0, 0, 0.35);
border-radius: 8px;
&:hover{
  color: ${theme.palette.primary.main};
  background: rgba(0, 0, 0, 0.50);
}`