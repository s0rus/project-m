import { VolumeSlider, VolumeSliderBox, VolumeSliderPopver } from './VolumeControl.styles';
import { bindHover, bindPopover, usePopupState } from 'material-ui-popup-state/hooks';

import { IconButton } from '@mui/material';
import { getVolumeIcon } from '../../model/VideoPlayer.model';
import { useVideoPlayerStore } from '../../store/VideoPlayer.store';
import { LocalStorageKeys } from '@/domain/App/model/App.model';
import { useCallback } from 'react';

const VolumeControl = () => {
  const isReady = useVideoPlayerStore((state) => state.isReady);
  const isMuted = useVideoPlayerStore((state) => state.isMuted);
  const setIsMuted = useVideoPlayerStore((state) => state.setIsMuted);
  const initialMute = useVideoPlayerStore((state) => state.initialMute);
  const setInitialMute = useVideoPlayerStore((state) => state.setInitialMute);
  const volume = useVideoPlayerStore((state) => state.volume);
  const setVolume = useVideoPlayerStore((state) => state.setVolume);

  const toggleMuted = useCallback(() => {
    setIsMuted(isReady ? !isMuted : false);
    setInitialMute(isReady && initialMute && false);
  }, [isMuted, isReady, setIsMuted, setInitialMute, initialMute]);

  const handleVolumeChange = useCallback(
    (_: Event, value: number | number[]) => {
      setVolume(value as number);
      setIsMuted(isMuted && false);
      setInitialMute(initialMute && false);
      localStorage.setItem(LocalStorageKeys.PlayerVolume, JSON.stringify(value as number));
    },
    [setVolume, isMuted, setIsMuted, initialMute, setInitialMute]
  );

  const popupState = usePopupState({ variant: 'popover', popupId: 'volumeControl' });
  return (
    <>
      <IconButton onClick={toggleMuted} {...bindHover(popupState)}>
        {getVolumeIcon(isMuted, volume)}
      </IconButton>

      <VolumeSliderPopver
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: -135,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <VolumeSliderBox>
          <VolumeSlider
            orientation='vertical'
            valueLabelDisplay='off'
            onChange={handleVolumeChange}
            value={isMuted ? 0 : volume}
            disabled={!isReady}
            min={0}
            max={1}
            step={0.01}
          />
        </VolumeSliderBox>
      </VolumeSliderPopver>
    </>
  );
};

export default VolumeControl;
