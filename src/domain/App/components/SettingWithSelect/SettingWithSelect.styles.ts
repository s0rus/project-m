import { Stack, styled, Button, Select, Box } from '@mui/material';
import { theme } from '@/styles/theme';
export const SettingStack = styled(Button)`
  display: inline-flex;
  width: 100%;
  height: 50px;
  margin-right: -16px;
  margin-top: -14px;
  justify-content: left;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0);
  gap: 0.55rem;
  &:hover {
    background: rgba(255, 255, 255, 0);
  }
  &:active {
    background: rgba(255, 255, 255, 0);
  }
  & button {
    position: absolute;
    right: 1rem;
  }

  & h5 {
    margin-bottom: 1rem;
  }
`;

export const InnerStack = styled(Stack)`
  display: inline-flex;

  & svg {
    color: ${theme.palette.primary.main};
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  height: 50px;
  justify-content: left;
  border-radius: 4px;
  cursor: default;
  background: #18181b;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  & button {
    position: absolute;
    right: 1rem;
  }
  & svg {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Header = styled(Box)`
  display: inline-flex;

  & h6 {
    padding: 0rem 0rem;
  }
`;
