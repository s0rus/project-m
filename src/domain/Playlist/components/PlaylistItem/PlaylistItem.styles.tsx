import { Avatar, Box, Card, CardContent, Stack, styled } from '@mui/material';
import { theme,gradients } from '@/styles/theme';

export const PlaylistItemWrapper = styled(Card)`
  width: 100%;
  height: 120px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: rgba(0,0,0,0.50);
  border-radius: 8px;
  transform: scale(0.98,0.98);
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: rgba(0,0,0,0.55);
  }
`;

export const PlaylistItemContent = styled(CardContent)`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const PlaylistItemBox = styled(Box)`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const PlaylistItemDetails = styled(Stack)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddedByWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.8rem;
  background-color: ${theme.palette.background.paper};
  border-radius: 4px;
  padding-right: 0.8rem;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 4px;
`;

export const Delete = styled('div')`
height: 40px;
width: 40px;
transition: all 0.5s;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
cursor: pointer;
margin-right: 5px;
margin-top: 10px;
text-transform: capitalize;
&:hover{
  color: red;
}
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 8px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s;
  transform: scale(1.2,1.2);
}
&:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
&:hover::after{
  opacity: 1;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  cursor: pointer;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}`
export const Current = styled('div')`
height: 40px;
width: 40px;
transition: all 0.5s;
box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
cursor: pointer;
margin-right: 5px;
margin-top: 10px;
text-transform: capitalize;
&:hover{
  color: green;
}
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 8px;
  height: 100%;
  opacity: 0;
  transition: all 0.2s;
  transform: scale(1.2,1.2);
}
&:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s;
}
&:hover::after{
  opacity: 1;
  border-radius: 8px;
  transform: scale(1,1);
}
&:hover::before{
  opacity: 0 ;
  cursor: pointer;
  border-radius: 8px;
  transform: scale(0.5,0.5);
}`


export const ItemTitle = styled('h4')`
padding: 0;
margin: 0;
width: 100%;
font-size: 20px;
color: white;
transition: 0.2s
`