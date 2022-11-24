import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Grid } from '@mui/material';

import BarButtons from '../BarButtons';
import VideoCard from '@/domain/App/components/VideoCard';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';

const DashboardBar = () => {
  const currentVideo = usePlaylistStore((state) => state.currentVideo);
  const isMediumDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <DashboardBarWrapper>
        <DashboardBarContainer container>
          <Grid container spacing={2}>
            <Grid item sm={12} md={7} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
              <VideoCard video={currentVideo} />
            </Grid>
            <Grid item sm={12} md={5} style={{ minWidth: isMediumDown ? '100%' : '20%' }}>
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
