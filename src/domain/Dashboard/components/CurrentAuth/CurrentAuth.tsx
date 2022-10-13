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
  background: rgba(0, 0, 0, 0.25);
  width: 100px;
  height: 40px;
  display: flex;
  transition: all 0.5s;
  border-radius: 8px;
  position: relative; all 0.3s;
  text-transform: capitalize;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s;
    border: 1px solid hsla(255, 68%, 45%, 0.50);
    transform: scale(1.2,1.2);
  }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
  }
  &:hover::after{
    opacity: 1;
    border-radius: 8px;
    transform: scale(1,1);
  }
  &:hover::before{
    opacity: 0 ;
    border-radius: 8px;
    transform: scale(0.5,0.5);
  }`

  
  return (
    <div>

        {isLoggedIn ? (
    <div style={{display: 'flex', position: 'relative', right: '5%', bottom: '0px'}} >
    {isAdmin ? (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.admin')} >
<CurrentAuthHolder>
<img src={currentUser.image} style={{height: '40px', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', position: 'relative', top: '0px', zIndex: '999999'}} />
<AdminPanelSettingsIcon style={{color: `red`, position: 'absolute', right: '20px', top: '8px', zIndex:'9999999' }} />
</CurrentAuthHolder>
</Tooltip>
      ) : (
<Tooltip style={{cursor: 'default'}} title={t('playlist.tooltip.logged')} >
<CurrentAuthHolder>
<img src={currentUser.image} style={{height: '40px', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', position: 'absolute', top: '0px', zIndex: '999999'}} />
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
)}
      </div>
  );
};

export default CurrentAuth;
