import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Grid } from '@mui/material';
import BarButtons from '../BarButtons';
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <DashboardBarWrapper>
        <DashboardBarContainer container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={8} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
              <VideoCard video={currentVideo} />
            </Grid>
            <Grid item sm={12} md={4} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
              <DashboardBarButtons>
                <BarButtons />
              </DashboardBarButtons>
            </Grid>
          </Grid>
        </DashboardBarContainer>
      </DashboardBarWrapper>
    </>
  );
};

export default DashboardBar;
