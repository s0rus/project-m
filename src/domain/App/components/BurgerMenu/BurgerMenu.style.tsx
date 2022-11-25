import { styled } from '@mui/material';
import { Button, Box } from '@mui/material';

export const BurgerPopout = styled(Box)`
  height: 100vh;
  transition: 0.2s;
  width: 300px;
  position: absolute;
  background: #0e0e10;
  z-index: 9999;
  padding: 1rem 1rem;
`;

export const StyledButton = styled(Button)`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: left;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  background: #18181b;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const ImageBox = styled('div')`
  height: 35px;
  width: 35px;
  display: flex;
  & img {
    margin-top: 10px;
  }

  & svg {
    color: #3f3f3f;
    margin-top: 4px;
  }
`;

export const Title = styled('div')`
  width: 100%;
  margin-bottom: 2vh;
  & h2 {
    padding: 0rem 0.5rem;
  }
`;
