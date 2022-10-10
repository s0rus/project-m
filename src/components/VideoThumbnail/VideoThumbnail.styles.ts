import { Box, CardMedia, Typography, styled } from '@mui/material';

import Image from 'next/image';
import hexToRgba from 'hex-to-rgba';
import { theme } from '@/styles/theme';

export const VideoThumbnailWrapper = styled(CardMedia)`
  width: 220px;
  height: 115px;
  transition: 0.2s ease-in-out;
  cursor: default;
  &:hover{
    width: 320px;
  }
`;

export const VideoThumbnailContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const VideoThumbnailImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  border-right: 2px solid ${theme.palette.primary.main}!important;
  background-color: ${theme.palette.background.paper};
`;

export const VideoDurationSpan = styled(Typography)`
  padding: 0 0.4rem;
  border-radius: 0.25rem;
  position: absolute;
  bottom: 0.4rem;
  right: 0.4rem;
  color: ${theme.palette.primary.contrastText};
  background-color: ${hexToRgba(theme.palette.background.paper, 0.8)};
`;