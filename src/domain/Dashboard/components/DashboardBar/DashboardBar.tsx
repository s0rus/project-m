import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper, Halloween1 } from './DashboardBar.styles';
import { Grid, Hidden, Tooltip } from '@mui/material';
import BarButtons from '../BarButtons';
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import Image from 'next/image';
import Jan from '@/domain/Icons/Jan.svg'

const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();

  return (
    <>
    <Hidden lgDown>
      <DashboardBarWrapper>
        <DashboardBarContainer container>
          <Grid item sm={12} md={7}>
            <VideoCard video={currentVideo} />
          </Grid>
          <Grid item sm={12} md={5}>
            <DashboardBarButtons>
              <BarButtons />
            </DashboardBarButtons>
          </Grid>
        </DashboardBarContainer>
      </DashboardBarWrapper>
<Tooltip title='Strasznego halloween!🎃'>
<Halloween1>
<Image src={Jan} alt=''/>
</Halloween1>
</Tooltip>
      </Hidden>


      <Hidden lgUp >
      <DashboardBarWrapper>
        <DashboardBarContainer container>

            <DashboardBarButtons style={{marginTop: '50px'}} >
              <BarButtons />
            </DashboardBarButtons>

        </DashboardBarContainer>
      </DashboardBarWrapper>
      </Hidden>
    </>
  );
};

export default DashboardBar;