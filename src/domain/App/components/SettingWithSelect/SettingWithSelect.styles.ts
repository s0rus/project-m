import { Stack, styled, Select } from '@mui/material';

export const SettingStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  height: 32px;
  justify-content: space-between;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const InnerStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  border: none;
  gap: 1.5rem;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const StyledSelect = styled(Select)`
color: #FFF;
transition: all 0.5s;
min-width: 150px;
cursor: default;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
background-color: rgba(0,0,0,0.25);
border-radius: 8px;
border: none;
outline: none;
position: relative; all 0.3s;
text-transform: capitalize;
&:hover{
  outline: 5px solid rgba(0,0,0,0);
  background-color: rgba(255,255,255,0.05);
}
`;

export const TitleSelect = styled('h2')`
  line-height: 1.1;
  font-size: 16px;
  width: 100px;
  letter-spacing: 1px;
  position: relative;
  text-shadow: 0px 0px 10px white;
  text-align: left;
  margin: 0px;
  padding: 0px;
  right: 15px;
  font-weight: 500;
`;

export const TitleSubSelect = styled('h2')`
  line-height: 1.1;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  display: flex;
  transition: all 0.3s ease 0s;
  position: relative;
  text-align: left;
  margin: 0px;
  padding: 0px;
  right: 15px;
  font-weight: 400;
  color: #c7c7c7;
`;
