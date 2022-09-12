import React from 'react';
import { SvgIconProps } from '@mui/material';

export const Twitch: React.FC<SvgIconProps> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' {...props}>
      <path
        fill='currentColor'
        d='M48 0L16 96v352h128v64h64l64-64h96l128-136.32V0H48zm416 288l-89.6 96H260.928L192 434.144V384H80V32h384v256z'
      ></path>
      <path fill='currentColor' d='M240 128h32v128h-32zM336 128h32v128h-32z'></path>
    </svg>
  );
};
