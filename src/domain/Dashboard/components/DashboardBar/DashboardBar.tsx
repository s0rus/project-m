import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Grid, Hidden, Tooltip } from '@mui/material';
import BarButtons from '../BarButtons';
import React from 'react';
import VideoCard from '@/components/VideoCard';
import { usePlaylistContext } from '@/domain/Playlist/context/PlaylistContext';


const DashboardBar = () => {
  const { currentVideo } = usePlaylistContext();

  return (
    <>
    <div style={{background: 'rgba(0,0,0, 0.15)', width: '102.1%', marginLeft: '-1%', marginTop: '-5px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}} >
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
      </div>
    </>

  );
};

export default DashboardBar;