
import * as React from 'react';
import { Box, Tooltip } from '@mui/material';
import Image from 'next/image';
import Twitch from '@/domain/Icons/Twitch.svg'
import Discord from '@/domain/Icons/Discord.svg'
import { useTranslation } from 'react-i18next';
import { TwitchBox, DiscordBox, NavText, NavHolder } from './Navigation.style'
import ReceiptIcon from '@mui/icons-material/Receipt';
const Navigation = () => {
  const { t } = useTranslation();


  return (
    <NavHolder>
<a href='https://www.twitch.tv/khamires' >
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

    </NavHolder>
  );
};

export default Navigation;
