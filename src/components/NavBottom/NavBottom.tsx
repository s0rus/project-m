import { NavBot,A,Icon,NavTitle}  from '@/styles/style'
import Image from 'next/image';
import DiscordLogo from 'components/Icons/Discord.svg'
import TwitchLogo from 'components/Icons/Twitch.svg'
import PaypalLogo from 'components/Icons/PayPal.svg'

const NavBottom = () => {
    return (
<NavBot>

              <A target="_blank" href='https://discord.com/invite/bRwn7caV3f'> <Icon><Image src={DiscordLogo} width={48} height={48} /><NavTitle>Discord</NavTitle></Icon></A>
              <A target="_blank" href='https://www.twitch.tv/khamires'> <Icon><Image src={TwitchLogo} width={48} height={48} /><NavTitle>Twitch</NavTitle></Icon></A>
              <A target="_blank" href='https://streamelements.com/khamires/tip'> <Icon><Image src={PaypalLogo} width={48} height={48} /><NavTitle>Donate</NavTitle></Icon></A>
</NavBot>
    )}
  
  export default NavBottom;