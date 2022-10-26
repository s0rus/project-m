import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import { List, Tooltip, Typography, IconButton, CircularProgress } from '@mui/material';
import {
  EmptyPlaylistBox,
  PlaylistContainer,
  PlaylistDetail,
  PlaylistHeader,
  PlaylistWrapper,
} from './Playlist.styles';
import React, { useMemo, useState } from 'react';
import PlaylistItem from '../../components/PlaylistItem';
import { PlaylistWithUsers } from '../../model/Playlist.model';
import timeFormatter from '@/utils/timeFormatter';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useTranslation } from 'react-i18next';
import MadgeIcon from '@/domain/Icons/MadgeIcon.svg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { useAuthContext } from '@/contexts/AuthContext';
import Hidden from '@mui/material/Hidden';
import Image from 'next/image';

const Playlist = () => {
  const { isAdmin } = useAuthContext();
  const { t } = useTranslation();
  const { playlist, properPlaylist, playlistLocked } = usePlaylistContext();
  const [animatedList] = useAutoAnimate();
  const { togglePlaylistLocked } = usePlaylistContext();
  const [locking, setIsLocking] = useState(false);

  const timeSum = useMemo(
    () =>
      (playlist as PlaylistWithUsers[]).reduce<number>(
        (acc: number, curr: PlaylistWithUsers) => acc + curr.videoDuration,
        0
      ),
    [playlist]
  );

  
const CircularLocking = async () => {
  setIsLocking(true)
  await togglePlaylistLocked();
  setIsLocking(false)
}


  return (
    <>
    <PlaylistWrapper locked={playlistLocked ? 1 : 0}>
        <PlaylistHeader>         
{isAdmin ? (
          <div style={{marginTop: '8px'}} >
        {playlistLocked ? (

          <Tooltip title={t('playlist.tooltip.unlock')} >
        <IconButton disabled={locking}>
{locking ? <CircularProgress size={30} style={{height: '30px', width: '30px', marginTop: '-10px', marginRight: '-10px', marginLeft: '-10px'}} /> : <LockOutlinedIcon  onClick={CircularLocking} style={{height: '30px', width: '30px', marginTop: '-10px', marginRight: '-10px', marginLeft: '-10px'}} />}
        </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={t('playlist.tooltip.lock')} >
      <IconButton disabled={locking}>
{locking ? <CircularProgress size={30} style={{height: '30px', width: '30px', marginTop: '-10px', marginRight: '-10px', marginLeft: '-10px'}} /> : <LockOpenOutlinedIcon  onClick={CircularLocking} style={{height: '30px', width: '30px', marginTop: '-10px', marginRight: '-10px', marginLeft: '-10px'}} />}
      </IconButton>
         </Tooltip>
         )} 
          </div>
) : (
  <div style={{marginTop: '8px'}} >
  {playlistLocked ? (
              <Tooltip title={t('playlist.tooltip.locked')} >
  <LockOutlinedIcon style={{color: 'rgba(255, 0, 0, 0.49)'}} />
              </Tooltip>
  ) : (
              <Tooltip title={t('playlist.tooltip.unlocked')} >
   <LockOpenOutlinedIcon style={{color: 'rgba(38, 255, 0, 0.49)'}} />
              </Tooltip>
   )} 
    </div>

)}
<Hidden lgDown >
          <Typography variant='h2' style={{textShadow: '0px 0px 10px white',}} >{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded  />
              <Typography variant='h5' style={{textShadow: `0px 0px 10px white`}} >{properPlaylist.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography variant='h5' style={{textShadow: '0px 0px 10px white'}} >{timeFormatter(timeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
</Hidden>
<Hidden lgUp >
          <Typography variant='h2' style={{textShadow: '0px 0px 10px white', overflow: 'hidden'}} >{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded/>
              <Typography variant='h5' style={{textShadow: '0px 0px 10px white', overflow: 'hidden'}} >{properPlaylist.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography variant='h5' style={{textShadow: '0px 0px 10px white', overflow: 'hidden'}} >{timeFormatter(timeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
</Hidden>
        </PlaylistHeader>
        <PlaylistContainer component={List} ref={animatedList}>
          {properPlaylist.length ? (
            properPlaylist.map((video) => (
              <React.Fragment key={video.videoId}>
                <PlaylistItem video={video} />
              </React.Fragment>
            ))
          ) : (
            <EmptyPlaylistBox>
              <Typography style={{textShadow: '0px 0px 10px white'}} variant='h4'>{t('playlist.empty')} <div style={{marginTop: '10px', marginLeft: '40%'}} > <Image src={MadgeIcon} alt='Madge' height={48} width={48} /></div>  </Typography>
            </EmptyPlaylistBox>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;