import { styled, Box, Button } from '@mui/material';
import { theme } from '@/styles/theme';
export const SettingStack = styled(Button)`
  display: inline-flex;
  width: 100%;
  height: 50px;
  justify-content: left;
  border-radius: 4px;
  cursor: pointer;
  background: #18181b;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  & button {
    position: absolute;
    right: 1rem;
  }
`;

export const InnerStack = styled('div')`
  height: 35px;
  width: 35px;
  display: flex;
  & img {
    margin-top: 10px;
  }

  & svg {
    color: ${theme.palette.primary.main};
    margin-top: 7px;
  }
`;

export const Header = styled(Box)`
  display: inline-flex;

  & h6 {
    padding: 0rem 0rem;
  }
`;
