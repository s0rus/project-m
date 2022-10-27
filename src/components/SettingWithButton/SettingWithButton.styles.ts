import { Stack, styled } from '@mui/material';
import { theme } from '@/styles/theme';
export const SettingStack = styled(Stack)`
  min-height: 4.25rem;
  margin-top: 1rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  color: #FFF;
  transition: all 0.5s;
  min-width: 150px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  max-width: 100%;
  background-color: rgba(255,255,255,0.09);
  border-radius: 8px;
  position: relative; all 0.3s;
  margin-bottom: 20px;
  text-transform: capitalize;
  transform: scale(0.93,0.93);
  
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    min-width: 150px;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    background-color: rgba(0,0,0,0.25);
    transition: all 0.3s;
  }
  &:hover{
    transform: scale(0.97,0.97);
  }
  &:hover::after{
    opacity: 1;
    background: red;
    min-width: 150px;
    border-radius: 8px;
    transform: scale(0.97,0.97);
  }
  &:hover::before{
    opacity: 0 ;
    cursor: pointer;
    min-width: 150px;
    border-radius: 8px;
    transform: scale(0.5,0.5);
  }
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

export const TitleOption = styled('h2')`
line-height: 1.1;
font-size: 16px;
width: 100px;
letter-spacing: 1px;
cursor: default;
position: relative;
text-shadow: 0px 0px 10px white;
text-align: left;
margin: 0px;
right: 15px;
padding: 0px;
font-weight: 500; `

export const SubTitleOption = styled('h2')`
line-height: 1.1;
font-size: 13px;
font-weight: 400;
letter-spacing: 1px;
width: 200px;
right: 15px;
cursor: default;
display: flex;
transition: all 0.3s ease 0s;
position: relative;
text-align: left;
margin: 0px;
padding: 0px;
font-weight: 400;
color: ${theme.palette.primary.main};
`