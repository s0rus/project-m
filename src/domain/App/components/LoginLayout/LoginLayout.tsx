import { LoginHolder, Avatar, LoginItems } from './LoginLayout.style';
import React, { useState } from 'react';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { Twitch } from '@/assets/logos/Twitch';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
const LoginLayout = () => {
  const { t } = useTranslation();
  const { logoutOfTwitch } = useAuthChange();
  const { currentUser } = useAuthStore();
  const [active, isActive] = useState(false);
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <LoginHolder
        style={{ width: isMediumDown ? '50px' : '150px', margin: isMediumDown ? '0rem 0rem' : '0rem 3rem' }}
        onClick={() => isActive((prev) => !prev)}
      >
        {isMediumDown ? <></> : <Typography variant='body2'>{currentUser.name}</Typography>}
        <Avatar src={currentUser.image!} alt='avatar' />
      </LoginHolder>

      {active && (
        <LoginItems style={{ right: isMediumDown ? '0px' : '40px' }}>
          <SettingWithButton
            header={t('options.twitchTitle')}
            buttonLabel={t('logOut')}
            buttonAction={logoutOfTwitch}
            icon={<Twitch style={{ color: '#6441a5 ' }} />}
            variant='contained'
          />
        </LoginItems>
      )}
    </>
  );
};

export default LoginLayout;
