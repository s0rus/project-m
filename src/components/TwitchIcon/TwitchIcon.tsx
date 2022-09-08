import React from 'react';
import { Icon, TTVimg } from '@/styles/style';
import Image from 'next/image';
import TwitchLogo from 'components/Icons/Twitch.svg'

const TwitchIcon = () => {
  return (

    <div><TTVimg><Icon><Image src={TwitchLogo} width={58} height={58}/></Icon></TTVimg></div>
  );
};

export default TwitchIcon;
