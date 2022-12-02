import { styled } from '@mui/material';
export const Background = styled('div')`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleOption = styled('h2')`
  line-height: 1.1;
  font-size: 36px;
  text-shadow: 0px 0px 10px white;
  font-weight: 500;
`;
