
import * as React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import Twitch from '@/domain/Icons/Twitch.svg'
import Discord from '@/domain/Icons/Discord.svg'
import { useTranslation } from 'react-i18next';
import { TwitchBox, DiscordBox, NavText } from './Navigation.style'
const Navigation = () => {
  const { t } = useTranslation();


  return (
    <Box sx={{ width: '100%', height: '56px', display: 'flex', position: 'absolute' , gap: '150px', justifyContent: 'center', overflow: 'hidden', background: 'rgba(0, 0, 0, 0.50)'}}>

<a href='https://www.twitch.tv/khamires' >
        <TwitchBox>
        <Image src={Twitch} alt='Twitch' />
        </TwitchBox></a>
<NavText>{t('Navigation.twitch')}</NavText>

<a href='https://discord.gg/Vu8VFS4wZ9'>
        <DiscordBox>
        <Image src={Discord} alt='Discord' />
        </DiscordBox></a>
<NavText>{t('Navigation.discord')}</NavText>

    </Box>
  );
};

export default Navigation;
