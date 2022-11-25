import { DashboardBarButtons, DashboardBarContainer, DashboardBarWrapper } from './DashboardBar.styles';
import { Grid } from '@mui/material';

import BarButtons from '../BarButtons';

const DashboardBar = () => {
  return (
    <>
      <DashboardBarWrapper>
        <DashboardBarContainer container>
          <Grid item sm={12} md={12}>
            <DashboardBarButtons>
              <BarButtons />
            </DashboardBarButtons>
          </Grid>
        </DashboardBarContainer>
      </DashboardBarWrapper>
    </>
  );
};

export default DashboardBar;
