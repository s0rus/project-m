import { Stack, styled, Select } from '@mui/material';



export const SettingStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
`;

export const InnerStack = styled(Stack)`
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  border: none;
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;


export const StyledSelect = styled(Select)`
color: #FFF;
transition: all 0.5s;
background: rgba(255,255,255,0.1);
min-width: 150px;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
cursor: pointer;
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 100px;
text-transform: capitalize;
&:hover{

}
&:before{
  position: absolute;
  top: 0;
  left: 0;
  min-width: 150px;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
&:hover{
  background: rgba(0, 0, 0, 0.52);
}
&:hover::after{
  opacity: 1;
  rgba(255,255,255,0.9)
  min-width: 150px;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  cursor: pointer;
  min-width: 150px;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}`