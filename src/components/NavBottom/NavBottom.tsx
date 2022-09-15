import { NavBot,A,Icon,NavTitle}  from '@/styles/style'
import Image from 'next/image';
import DiscordLogo from 'components/Icons/Discord.svg'
import TwitchLogo from 'components/Icons/Twitch.svg'
import DonateLogo from 'components/Icons/Donate.svg'
import { styled, Box,} from '@mui/material';

export const NavTitleTwitch = styled('h5')`
box-shadow: inset 0 0 0 0 #6430ff;
font-family: poppins, sans-serif;
text-transform: capitalize;
font-weight: 500;
font-style: normal;
display: flex;
position: absolute;
font-size: 18px;
color: white;
margin: 0 -.25rem;
padding: 0 .25rem;
border-radius: 50px;
width: 4.5%;
margin-top: -40px;
margin-left: 50px;
transition: 0.5s color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
cursor: pointer;
&:hover {
  box-shadow: inset 100px 0 0 0 rgba(255, 255, 255, 0.4);
  color: #6430ff;}`

const NavBottom = () => {
    return (
<NavBot>

              <A target="_blank" href='https://discord.com/invite/bRwn7caV3f'> <Icon><Image src={DiscordLogo} width={48} height={49} /><NavTitle>Discord</NavTitle></Icon></A>
              <A target="_blank" href='https://www.twitch.tv/khamires'> <Icon><Image src={TwitchLogo} width={48} height={49} /><NavTitleTwitch>Twitch</NavTitleTwitch></Icon></A>
              <A target="_blank" href='https://streamelements.com/khamires/tip'> <Icon><Image src={DonateLogo} width={48} height={49} /><NavTitle>Donate</NavTitle></Icon></A>
</NavBot>
    )}
  
  export default NavBottom;