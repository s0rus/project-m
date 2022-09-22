import { IndicatorContainer, IndicatorElement, IndicatorWrapper } from './Indicator.styles';
import React, { FC } from 'react';

import { Typography } from '@mui/material';
import { getPlayingStateIcon } from '../../VideoPlayer.model';
import { usePlayerContext } from '@/contexts/PlayerContext';
import { useTranslation } from 'react-i18next';

interface IndicatorProps {
  handlePlaying: () => void;
}

const Indicator: FC<IndicatorProps> = ({ handlePlaying }) => {
  const { t } = useTranslation();
  const { playerState } = usePlayerContext();
  const { isPlaying, initialMute } = playerState;

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
