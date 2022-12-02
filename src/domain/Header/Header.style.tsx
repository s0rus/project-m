import { styled } from '@mui/material';
import { IconButton } from '@mui/material';

export const HeaderTop = styled('div')`
  transition: all 0.2s;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #18181b;
  gap: 1rem;
  & svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

export const StyledLogo = styled(IconButton)`
  display: inline-flex;
  gap: 1rem;
  border-radius: 0px;
  margin-left: 2.5rem;
  transition: 0.3s;
  &:hover {
    background: #0e0e10;
  }
`;
