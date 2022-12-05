import { IndicatorContainer, IndicatorElement, IndicatorWrapper } from './Indicator.styles';
import type { FC } from 'react';
import React from 'react';

import { Typography } from '@mui/material';
import { getPlayingStateIcon } from '../../model/VideoPlayer.model';
import { useTranslation } from 'react-i18next';

interface IndicatorProps {
  handlePlaying: () => void;
  isPlaying: boolean;
  initialMute: boolean;
}

const Indicator: FC<IndicatorProps> = ({ handlePlaying, initialMute, isPlaying }) => {
  const { t } = useTranslation();

  return (
    <IndicatorWrapper onClick={handlePlaying}>
      <IndicatorContainer>
        <IndicatorElement playing={+isPlaying} initialmute={+initialMute}>
          {getPlayingStateIcon(isPlaying, initialMute)}
          {initialMute && (
            <Typography variant='h5' sx={{ mt: '1rem' }}>
              {t('cancelMute')}
            </Typography>
          )}
        </IndicatorElement>
      </IndicatorContainer>
    </IndicatorWrapper>
  );
};

export default Indicator;
