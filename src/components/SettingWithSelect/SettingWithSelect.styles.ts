import { Stack, styled, Select } from '@mui/material';



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


export const StyledSelect = styled(Select)`
color: #FFF;
transition: all 0.5s;
min-width: 150px;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
text-transform: capitalize;

&:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150px;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  background-color: rgba(255,255,255,0.02);
  transition: all 0.3s;
}
&:hover{
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.08,1.08);
}
&:hover::after{
  opacity: 1;
  background: red;
  min-width: 150px;
  border-radius: 8px;
  transform: scale(1.05,1.05);
}
&:hover::before{
  opacity: 0 ;
  cursor: pointer;
  min-width: 150px;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}`