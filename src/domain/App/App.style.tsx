import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

export const SideBar = styled('div')`
  height: 105.5vh;
  width: 65px;
  background: #18181b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & svg {
    height: 40px;
    width: 40px;
  }
  & button {
    margin-bottom: 40px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  height: 45px;
  width: 45px;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
