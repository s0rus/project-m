
import * as React from 'react';
import { Tooltip, Hidden } from '@mui/material';
import Twitch from '@/domain/Icons/Twitch.svg'
import Discord from '@/domain/Icons/Discord.svg'
import { useTranslation } from 'react-i18next';
import { TwitchBox, DiscordBox, NavText, NavHolder, NavHolderFull } from './Navigation.style'
import ReceiptIcon from '@mui/icons-material/Receipt';
import Image from 'next/image';

const Navigation = () => {
  const { t } = useTranslation();


  return (
        <div>
        <Hidden lgDown>
        <NavHolderFull>
<a href='https://www.twitch.tv/khamires' style={{}} >
<Tooltip title={t('playlist.tooltip.twitch')}>
        <TwitchBox>
        <Image src={Twitch} alt='Twitch' />
        </TwitchBox>
        </Tooltip>
        </a>
<NavText>{t('Navigation.twitch')}</NavText>
<a href='https://discord.gg/Vu8VFS4wZ9'>
<Tooltip title={t('playlist.tooltip.discord')}>
        <DiscordBox>
        <Image src={Discord} alt='Discord' />
        </DiscordBox>
        </Tooltip></a>
<NavText>{t('Navigation.discord')}</NavText>

<a href = "/Regulamin.pdf" target = "_blank">
        <TwitchBox style={{alignItems: 'center', justifyContent: 'center'}}>
        <ReceiptIcon style={{ color: 'white',}} />
        </TwitchBox>
        </a>

<NavText>{t('Navigation.regulations')}</NavText>


</NavHolderFull>
</Hidden>



<Hidden lgUp>
<NavHolder>
<a href='https://www.twitch.tv/khamires' >
<Tooltip title={t('playlist.tooltip.twitch')}>
        <TwitchBox>
        <Image src={Twitch} alt='Twitch' />
        </TwitchBox>
        </Tooltip>
        </a>
<a href='https://discord.gg/Vu8VFS4wZ9'>
<Tooltip title={t('playlist.tooltip.discord')}>
        <DiscordBox>
        <Image src={Discord} alt='Discord' />
        </DiscordBox>
        </Tooltip></a>


<a href = "/Regulamin.pdf" target = "_blank">
        <TwitchBox style={{alignItems: 'center', justifyContent: 'center'}}>
        <ReceiptIcon style={{ color: 'white',}} />
        </TwitchBox>
        </a>
        </NavHolder>
</Hidden>
    </div>
  );
};

export default Navigation;
