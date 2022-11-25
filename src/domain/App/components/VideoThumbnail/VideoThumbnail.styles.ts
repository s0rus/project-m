import { Box, CardMedia, Typography, styled } from '@mui/material';

import Image from 'next/image';
import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

export const VideoThumbnailWrapper = styled(CardMedia)`
  width: 350px;
  height: 100%;
  cursor: default;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

export const VideoThumbnailContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const VideoThumbnailImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  background-color: ${theme.palette.background.paper};
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const VideoDurationSpan = styled(Typography)`
  padding: 0 0.4rem;
  border-radius: 0.25rem;
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;
  color: ${theme.palette.primary.contrastText};
  background-color: ${hexToRgba(theme.palette.background.paper, 0.9)};
`;
