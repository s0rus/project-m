import { Routes } from '@/server/router/routes';
import { CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ScheduleItemCard, ScheduleItemContentStack } from './ScheduleItem.styles';

const DummyString =
  'Daleka przyszłość, gdzie świadomość można przenosić z ciała do ciała. Pewien buntownik zostaje przywrócony do życia, aby rozwiązać skomplikowaną sprawę morderstwa.';

const ScheduleItem = () => {
  return (
    <ScheduleItemCard>
      <ScheduleItemContentStack container>
        <Grid item xs={12} md={12} lg={4} sx={{ maxHeight: '200px' }}>
          <CardMedia component='img' sx={{ height: '100%' }} image={Routes.DEFAULT_THUMBNAIL} alt='green iguana' />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              Losowy film pepege
            </Typography>
            <Typography gutterBottom variant='body2' color='text.secondary' component='div'>
              45 min.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {DummyString}
            </Typography>
          </CardContent>
        </Grid>
      </ScheduleItemContentStack>
    </ScheduleItemCard>
  );
};

export default ScheduleItem;
