
import * as React from 'react';
import { Box, Hidden } from '@mui/material';
import Image from 'next/image';
import Twitch from '@/domain/Icons/Twitch.svg'
import Discord from '@/domain/Icons/Discord.svg'
import { useTranslation } from 'react-i18next';
import { TwitchBox, DiscordBox, NavText, Paper } from './Navigation.style'
import { theme } from '@/styles/theme';
const Navigation = () => {
  const { t } = useTranslation();


  return (
    <Box sx={{ width: '100%', height: '56px', background: '#17191F', display: 'flex', position: 'absolute' , gap: '150px', justifyContent: 'center', overflow: 'hidden', borderTop: `1px solid ${theme.palette.primary.main}`}}>
<Hidden lgDown>

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

</Hidden>
    </Box>
  );
};

export default Navigation;