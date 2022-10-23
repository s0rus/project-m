import { Tooltip } from '@mui/material';
import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { theme } from '@/styles/theme';
import { useTranslation } from 'react-i18next';
import { CurrentAuthHolder } from './CurrentAuth.styles';
const CurrentAuth = () => {
  const { isAdmin, isLoggedIn } = useAuthContext();
  const { t } = useTranslation();
  
  return (
    <>
        {isLoggedIn ? (
    <>
    {isAdmin ? (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.admin')} >
<CurrentAuthHolder>
<AdminPanelSettingsIcon style={{color: `red`, position: 'absolute', left: '8px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
      ) : (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.logged')} >
<CurrentAuthHolder>

<AdminPanelSettingsIcon style={{color: `${theme.palette.primary.main}`, position: 'absolute', left: '8px', top: '8px', zIndex:'9999999'  }} />
</CurrentAuthHolder>
</Tooltip>
      )}
      </>

): (

<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.guest')} >
<CurrentAuthHolder>
<AdminPanelSettingsIcon style={{color: `gray`, position: 'absolute', left: '8px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
)}
      </>
  );
};

export default CurrentAuth;