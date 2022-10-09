import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Divider, Grid } from '@mui/material';

import BarButtons from '../BarButtons';
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';

const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();

  return (
    <>
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
      <Divider />
    </>
  );
};

export default DashboardBar;
