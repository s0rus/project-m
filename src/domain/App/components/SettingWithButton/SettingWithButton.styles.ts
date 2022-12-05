import { Stack, styled } from '@mui/material';
import { gradients, theme } from '@/styles/theme';

export const SettingStack = styled(Stack)`
  min-height: 4.25rem;
  margin-top: 1rem;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${theme.palette.primary.dark};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${gradients.gradientMain};
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
