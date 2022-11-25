import { Stack, styled } from '@mui/material';
export const Background = styled('div')`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const SettingStack = styled(Stack)`
  flex-direction: row;
  margin-right: 200px;
  background: #18181b;
  border-radius: 28px;
  transition: 0.2s;
`;

export const InnerStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  width: 300px;
  cursor: pointer;
  gap: 1.5rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const TitleOption = styled('h2')`
  line-height: 1.1;
  font-size: 36px;
  width: 100px;
  cursor: default;
  letter-spacing: 1px;
  position: relative;
  text-shadow: 0px 0px 10px white;
  margin: 0px;
  left: 50px;
  padding: 0px;
  font-weight: 500;
`;
