import { Box, Button, styled } from '@mui/material';
import { theme } from '@/styles/theme';
export const SettingStack = styled(Button)`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: left;
  border-radius: 4px;
  cursor: default;
  margin-bottom: 0.5rem;
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
    margin-top: 5px;
  }
`;

export const Header = styled(Box)`
  display: inline-flex;

  & h6 {
    padding: 0rem 0rem;
  }
`;
