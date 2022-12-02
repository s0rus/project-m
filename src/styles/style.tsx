import { styled, Box, Stack, Avatar } from '@mui/material';
import { gradients } from '@/styles/theme';

export const Options = styled('div')`
  position: relative;
  padding-top: 1rem;
  transition: 0.3s;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: ${gradients.gradientPaper};
  box-shadow: rgba(0, 0, 0, 0.07) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.05) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const OptionsBox = styled('div')`
  box-sizing: border-box;
  padding: 0rem 1.5rem;
  -webkit-font-smoothing: antialiased;
  outline-color: rgb(117, 122, 255);
  transition: 0.3s ease-in-out;
`;

export const OptionsTitle = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: '600',
  textAlign: 'left',
  marginLeft: '28px',
  marginTop: '0px',
  cursor: 'default',
  display: 'flex',
});

export const ChatBox = styled('div')`
color: #FFF;
transition: all 0.5s;
min-width: 150px;
cursor: default;
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
max-width: 100%;
background: ${gradients.gradientMain};
border-radius: 8px;
position: relative; all 0.3s;
margin-bottom: 20px;
text-transform: capitalize;
&:hover{
  background-color: rgba(255,255,255,0.09);
}`;

export const CurrentVideoWrapper = styled(Box)`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  gap: 1rem;
`;

export const CurrentVideoDetails = styled(Stack)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const AddedByWrapper = styled(Stack)`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  gap: 0.8rem;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding-right: 0.8rem;
  border-radius: 8px;
`;

export const AddedByAvatar = styled(Avatar)`
  border-radius: 50%;
  margin-right: 1rem;
  height: 50px;
  width: 50px;
  transition: 0.2s;
  &:hover {
    height: 55px;
    width: 55px;
  }
`;
