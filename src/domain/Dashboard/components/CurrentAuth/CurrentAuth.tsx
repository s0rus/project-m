import { Tooltip,styled } from '@mui/material';
import React from 'react';
import { useAuthContext } from '@/contexts/AuthContext';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { theme } from '@/styles/theme';
import { useTranslation } from 'react-i18next';


const CurrentAuth = () => {
  const { isAdmin, isLoggedIn } = useAuthContext();
  const { currentUser} = useAuthContext();
  const { t } = useTranslation();

  const CurrentAuthHolder = styled('div')`
  background: #1d1f24;
  width: 100px;
  height: 40px;
  border-radius: 8px;`

  
  return (
    <div>

        {isLoggedIn ? (
    <div style={{display: 'flex', position: 'relative', right: '5%', bottom: '0px'}} >
    {isAdmin ? (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.admin')} >
<CurrentAuthHolder>
<img src={currentUser.image} style={{height: '40px', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', position: 'relative', top: '0px'}} />
<AdminPanelSettingsIcon style={{color: `red`, position: 'absolute', right: '20px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
      ) : (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.logged')} >
<CurrentAuthHolder>
<img src={currentUser.image} style={{height: '40px', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', position: 'absolute', top: '0px'}} />
<AdminPanelSettingsIcon style={{color: `${theme.palette.primary.main}`, position: 'absolute', right: '20px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
      )}
      </div>

): (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.guest')} >
<CurrentAuthHolder>
<AdminPanelSettingsIcon style={{color: `gray`, position: 'relative', left: '38px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
)

}
      </div>
  );
};

export default CurrentAuth;
