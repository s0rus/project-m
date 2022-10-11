import { AccessTimeFilledRounded, AutoAwesomeMotionRounded } from '@mui/icons-material';
import { List, Tooltip, Typography } from '@mui/material';
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
import Image from 'next/image';
import MadgeIcon from '@/domain/Icons/MadgeIcon.svg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';


const Playlist = () => {
  const { t } = useTranslation();
  const { playlist, properPlaylist, playlistLocked } = usePlaylistContext();
  const [animatedList] = useAutoAnimate();
  const { togglePlaylistLocked } = usePlaylistContext();
  const timeSum = useMemo(
    () =>
      (playlist as PlaylistWithUsers[]).reduce<number>(
        (acc: number, curr: PlaylistWithUsers) => acc + curr.videoDuration,
        0
      ),
    [playlist]
  );


  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <PlaylistWrapper locked={playlistLocked ? 1 : 0}>
        <PlaylistHeader>
        {playlistLocked ? (

          <Tooltip title={t('playlist.tooltip.unlock')} >
        <LockOutlinedIcon onClick={() => togglePlaylistLocked()} style={{color: isHovering ? 'white' : 'rgba(255, 0, 0, 0.49)', cursor: 'pointer'}}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} />
          </Tooltip>
        ) : (
          <Tooltip title={t('playlist.tooltip.lock')} >
         <LockOpenOutlinedIcon  onClick={() => togglePlaylistLocked()} style={{color: isHovering ? 'white' : 'rgba(38, 255, 0, 0.49)', cursor: 'pointer'}}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave} />
         </Tooltip>
         )} 

          <Typography variant='h2'>{t('playlist.header')}</Typography>
          <Tooltip title={t('playlist.tooltip.videoCount')}>
            <PlaylistDetail>
              <AutoAwesomeMotionRounded />
              <Typography variant='h4'>{properPlaylist.length || 0}</Typography>
            </PlaylistDetail>
          </Tooltip>
          <Tooltip title={t('playlist.tooltip.timeSum')}>
            <PlaylistDetail>
              <AccessTimeFilledRounded />
              <Typography variant='h4'>{timeFormatter(timeSum)}</Typography>
            </PlaylistDetail>
          </Tooltip>
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
              <Typography variant='h4'>{t('playlist.empty')} <div style={{marginTop: '10px', marginLeft: '40%'}} > <Image src={MadgeIcon} alt='Madge' height={48} width={48} /></div>  </Typography>
            </EmptyPlaylistBox>
          )}
        </PlaylistContainer>
      </PlaylistWrapper>
    </>
  );
};

export default Playlist;