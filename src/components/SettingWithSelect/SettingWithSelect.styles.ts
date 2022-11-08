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
cursor: default;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
background-color: rgba(0,0,0,0.25);
border-radius: 8px;
position: relative; all 0.3s;
text-transform: capitalize;
&:hover{
  background-color: rgba(255,255,255,0.09);
}
`