import { Stack, styled } from '@mui/material';

export const SettingStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const InnerStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
