import * as React from 'react';
import { Tooltip, Hidden } from '@mui/material';
import Twitch from '@/domain/Icons/Twitch.svg';
import Discord from '@/domain/Icons/Discord.svg';
import { useTranslation } from 'react-i18next';
import { SocialBox, NavText, NavHolderFull, NavHolder } from './Navigation.style';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Image from 'next/image';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hidden lgDown>
        <NavHolderFull>
          <Tooltip title='Twitch' placement='top-start'>
            <a href='https://www.twitch.tv/piotrlibera' style={{ cursor: 'pointer', color: 'white' }}>
              <SocialBox style={{ height: '45px', width: '45px' }}>
                <Image src={Twitch} alt='Twitch' />
              </SocialBox>
              <NavText style={{ cursor: 'pointer' }}>Twitch</NavText>
            </a>
          </Tooltip>

          <Tooltip title='Discord' placement='top-start'>
            <a href='https://discord.gg/Vu8VFS4wZ9' style={{ cursor: 'pointer', color: 'white' }}>
              <SocialBox style={{ height: '45px', width: '45px' }}>
                <Image src={Discord} alt='Discord' />
              </SocialBox>
              <NavText style={{ cursor: 'pointer' }}>Discord</NavText>
            </a>
          </Tooltip>

          <a href='/Regulamin.pdf' target='_blank' style={{ cursor: 'pointer', color: 'white' }}>
            <SocialBox style={{ alignItems: 'center', justifyContent: 'center', background: '#4b2bff' }}>
              <ReceiptIcon style={{ color: 'white' }} />
            </SocialBox>

            <NavText style={{ cursor: 'pointer' }}>{t('regulations')}</NavText>
          </a>
        </NavHolderFull>
      </Hidden>
      <Hidden lgUp>
        <NavHolder>
          <a href='https://www.twitch.tv/piotrlibera' style={{ cursor: 'pointer', color: 'white' }}>
            <SocialBox style={{ height: '45px', width: '45px' }}>
              <Image src={Twitch} alt='Twitch' />
            </SocialBox>
          </a>

          <a href='https://discord.gg/Vu8VFS4wZ9' style={{ cursor: 'pointer', color: 'white' }}>
            <SocialBox style={{ height: '45px', width: '45px' }}>
              <Image src={Discord} alt='Discord' />
            </SocialBox>
          </a>

          <a href='/Regulamin.pdf' target='_blank' style={{ cursor: 'pointer', color: 'white' }}>
            <SocialBox style={{ alignItems: 'center', justifyContent: 'center', background: '#4b2bff' }}>
              <ReceiptIcon style={{ color: 'white' }} />
            </SocialBox>
          </a>
        </NavHolder>
      </Hidden>
    </div>
  );
};

export default Navigation;
