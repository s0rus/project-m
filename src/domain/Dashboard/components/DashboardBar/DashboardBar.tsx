import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Divider, Grid } from '@mui/material';

import BarButtons from '../BarButtons';
import VideoCard from '@/domain/App/components/VideoCard';
import { usePlaylistStore } from '@/domain/Playlist/store/Playlist.store';

const DashboardBar = () => {
  const currentVideo = usePlaylistStore((state) => state.currentVideo);

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
