import { LoginHolder, Avatar, LoginItems } from './LoginLayout.style';
import React, { useState } from 'react';
import { useAuthStore } from '@/domain/App/store/Auth.store';
import { useAuthChange } from '@/domain/App/hooks/useAuthChange';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import SettingWithButton from '@/domain/App/components/SettingWithButton';
import { Twitch } from '@/assets/logos/Twitch';
const LoginLayout = () => {
  const { t } = useTranslation();
  const { logoutOfTwitch } = useAuthChange();
  const { currentUser } = useAuthStore();
  const [active, isActive] = useState(false);
  return (
    <>
      <LoginHolder onClick={() => isActive((prev) => !prev)}>
        <Typography variant='body2'>{currentUser.name}</Typography>
        <Avatar src={currentUser.image!} alt='avatar' />
      </LoginHolder>

      {active && (
        <LoginItems>
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
