import { Box, Slider, styled } from '@mui/material';

import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { theme } from '@/styles/theme';

export const VolumeSliderPopver = styled(HoverPopover)`
  height: 100%;
`;

export const VolumeSliderBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgba(71, 71, 71, 0.26) ;
  padding: 1.2rem 0.2rem 0.7rem 0.2rem;

  overflow: hidden;
`;

export const VolumeSlider = styled(Slider)`
  color: ${theme.palette.primary.main};
  height: 100px !important;

  & .MuiSlider-thumb {
    width: 14px;
    color: white;
    height: 14px;
    box-shadow: none !important;
  }

  &::before {
    box-shadow: none !important;
  }

  &:hover,
  &.Mui-focusVisible {
    box-shadow: none !important;
  }

  & .MuiSlider-rail {
    opacity: 0.28;
    color: rgba(255, 255, 255, 0.20);
  }
`;
