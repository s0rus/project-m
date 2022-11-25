import { styled } from '@mui/material';
export const LoginHolder = styled('div')`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  width: 150px;
  height: 52px;
  margin: 0rem 3rem;
  position: absolute;
  right: 0px;
  gap: 1rem;
  &:hover {
    background: #0e0e10;
    transform: scale(1.05, 1.05);
  }
`;

export const Avatar = styled('img')`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

export const LoginItems = styled('div')`
  position: absolute;
  background: #0e0e10;
  border-radius: 8px;
  padding: 0.5rem 0.5rem;
  width: 300px;
  z-index: 9999;
  top: 50px;
  right: 48px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
