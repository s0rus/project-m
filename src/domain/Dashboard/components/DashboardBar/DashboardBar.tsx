import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Divider, Grid, Hidden } from '@mui/material';
import { theme } from '@/styles/theme';
import BarButtons from '../BarButtons';
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';

const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();

  return (
    <>
    <Hidden lgDown >
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
      <Divider style={{background: `${theme.palette.primary.main}`, marginRight: '2rem'}} />
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