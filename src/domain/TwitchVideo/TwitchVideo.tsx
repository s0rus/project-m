import { getTwitchChatParent } from '@/pages/_app';
import React, { useState } from 'react';
import { TwitchVideoBox, MoveIconBox2, TwitchVideoHolder } from './TwitchVideo.styles';
import Draggable from 'react-draggable';
import OpenWithIcon from '@mui/icons-material/OpenWith';


const TwitchVideo = () => {
const [pointeractive, setIsActive] = useState(false);

const setPointerActive = () => {
  setIsActive(current => !current);
}
const setPointerRemove = () => {
  setIsActive(false);
}

  return (
<Draggable bounds={{left: -5, top: -10, right: 1270, bottom: 730,}} onStart={setPointerActive} onStop={setPointerRemove} >
    <TwitchVideoBox>
    <div style={{ pointerEvents: pointeractive ? 'none' : 'auto', }} >
      <TwitchVideoHolder src={`https://player.twitch.tv/?channel=khamires&parent=${getTwitchChatParent()}&muted=true`}>
      </TwitchVideoHolder>
    </div>
    <MoveIconBox2> <OpenWithIcon style={{background: '#6430ff', borderRadius: '8px', position: 'relative', right: '1px', height: '30px', width: '30px'}} /></MoveIconBox2>
    </TwitchVideoBox>
</Draggable>

  );
};

export default TwitchVideo;
