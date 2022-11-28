import { gradients, theme } from '@/styles/theme';
import { styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const ScheduleHeaderContainer = styled(Stack)`
  margin-bottom: 1rem;

  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ScheduleDate = styled(Typography)`
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  background: ${gradients.gradientMain};
  border: 1px solid ${theme.palette.primary.dark};
`;

const ScheduleHeader = () => {
  const { t } = useTranslation();

  return (
    <ScheduleHeaderContainer>
      <Typography variant='h2'>{t('schedule.header')}</Typography>
      <ScheduleDate variant='h5'>{dayjs().format('DD.MM.YYYY')}</ScheduleDate>
    </ScheduleHeaderContainer>
  );
};

export default ScheduleHeader;
