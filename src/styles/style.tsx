import { styled, Box, TextField } from '@mui/material';

  export const NavBot = styled('div')`
  display: flex;
  background: #1c1d26;
  text-align: center;
  justify-content: center;
  gap: 213px;
  color: #1c1d26;
  width:100%;
  border-top: 2px solid #534875;
  overflow: hidden;
  height: 80px;
  margin-top: 30px;`

  export const NavTop = styled('div')`
  display: flex;
  height: 80px;
  background: #1c1d26;
  justify-content: center;
  gap: 20%;
  color: #6a50bb;
  width:100%;
  border-bottom: 2px solid #534875;`

  export const NavTitle = styled('h5')`
  font-size: 25px;
  color: #6a50bb;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-top: -45px;
  margin-left: 56px;
  -webkit-text-stroke: 0.25px black;
  &:hover {
  -webkit-text-stroke: 2px white;
  color: white;`

  export const MiddleNav = styled('h5')`
  font-size: 35px;
  color: white;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-left: 15px;
  margin-top: -50px;
  -webkit-text-stroke: 0.25px black;
  color: white`

  export const ChatTitle = styled('h5')`
  font-size: 25px;
  color: #6a50bb;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-top: -37px;
  margin-left: 45px;
  -webkit-text-stroke: 0.25px black;
  &:hover {
  -webkit-text-stroke: 2px white;
  color: white;`

  export const Icon = styled('div')`
  height: 48px;
  width: 48px;
  border: 2px solid #a88cff;
  border-radius:50px;
  margin-top: 10px;
  &:hover {
    border: 2px solid white;`

  export const A = styled('a')`
  text-decoration:none;
  margin-top: 0.25rem`

  export const ChatIconBox = styled('div')`
  height: 48px;
  width: 48px;
  display:flex;
  position: relative;
  top: 25px;
  border: 2px solid rgb(39, 40, 53);
  border-radius: 50px;
  padding: 12px;
  margin-top: -8px;
  cursor: pointer;
  margin-left: -10%;

  &:hover {
  border: 2px solid white;`
 
  export const ChatIconImg = styled('div')`
  height: 20px;
  width: 25px; 
  margin-left: -2px;
  color: white;
  margin-top: -px;`

  export const NavBox = styled('div')`
  width: 100%;
  height: 100%;`

  export const PlaylistMain = styled('div')`
  width: 100%;
  height: 80%;
  margin-top: 5%;`

  export const AddIconBox = styled('div')`
  height: 48px;
  width: 48px;
  margin-left: 95%;
  margin-top:15px;
  border: 2px solid rgb(39, 40, 53);
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  &:hover {
  border: 2px solid white;}`

  export const LockOpenIconBox = styled(`div`)`
  height: 48px;
  width: 48px;
  z-index: auto;
  border: 2px solid rgb(39, 40, 53);
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  margin-top: -50px;
  margin-left: 165px;
  &:hover {
  border: 2px solid white;}`

  export const MoreVertIconBox = styled('div')`
  height: 48px;
  width: 48px;
  color: #323442;
  z-index: auto;
  border-radius: 50px;
  padding: 10px;
  margin-top: -47px;
  margin-left: 135px;`

  export const AddVideo = styled('div')`
  height: 400px;
  width: 300px;
  background: #1c1d26;
  border-radius: 45px;
  margin-left: 40%;
  margin-top: 15%;
  border: 4px solid #a88cff;` 

  export const BackgroundAdd = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  padding: 15px;
  overflow: auto;`

  export const TextFieldBox = styled('div')`
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 35px;`

  export const ButtonBox = styled('div')`
  margin-left: 32.5%;`

  export const BackgroundPlaylist = styled('div')`
  height: 100px;
  width: 400px;
  background: #1c1d26;
  margin-top: -3%;
  margin-left: 1%;
  padding: 0px;
  border-radius: 20px;
  margin-bottom: 60px;
  border-left: 3px solid #6a50bb;
  text-decoration: none;`

  export const TwitchImgBox = styled('div')`
  margin-top: -60px;
  margin-left: 255px;`

  export const H1 = styled('h1')`
  color:white;
  font-size: 30px;
  padding: 20px;
  -webkit-text-stroke: 0.25px black;
  margin-top: -120px;
  margin-left: 100px;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const H2 = styled('h2')`
  color:#a88cff;
  font-size: 15px;
  padding: 20px;
  -webkit-text-stroke: 0.25px black;
  margin-top: -50px;
  margin-left: 100px;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const TimeFont = styled('h2')`
  color:white;
  font-size: 15px;
  padding: 0px;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: normal;
  cursor:context-menu;`

  export const H3 = styled('h3')`
  color: white;
  font-size: 15px;
  padding: 20px;
  -webkit-text-stroke: 0.25px black;
  margin-top: -75px;
  margin-left: 200px;
  text-decoration: underline;
  text-decoration-color: #851bff;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const BrugImgBox = styled('div')`
  height: 64px;
  width: 64px;
  margin-left: 40%;
  margin-top: 10%`

  export const TwitchButton = styled('div')`
  display: flex;
  position: absolute;
  right: 8%;
  margin-top: -97px;
  height: 30px;
  border-radius: 50px;
  height: 45px;`

  export const H5twitch = styled ('h5')`
  font-family: poppins, sans-serif;
  display:flex;
  position: absolute;
  color: white;
  right: 45%;
  margin-top: 2px;
  font-weight: 300;
  font-style: normal;
  font-size:18px;
  -webkit-text-stroke: 0.25px black;
  cursor: pointer;
  &:hover {
  color: #534875;}`

  export const TTVimg = styled ('div')`
  display:flex;
  position: absolute;
  right: 8%;
  margin-top: -10px;
  cursor: pointer;`

  export const DummyDiv = styled('div')`
  height: 1000px;
  background: linear-gradient(180deg, rgba(29,29,38,1) 35%, rgba(38,39,50,1) 173%);`;

  export const PauseBox = styled ('div')`
  height:100%;
  width:100%;`

  export const IconBox = styled ('div')`
  height: 100%;
  width: 100%;
  display:flex;
  position: relative;
  top: 50%;
  left: 50%;`

  export const PauseStyle = {
  fontSize: '5rem',
  marginLeft: '-4%',
  color: 'white',
  cursor: 'pointer',
  border: '3px solid white',
  backgroundColor: 'hsla(0,0%,100%,.25)',
  borderRadius: '50px',  
};
    
  export const TextFieldcss = styled(TextField)({
  '& input:valid + fieldset': {
  borderColor: '#18181b',
  borderWidth: 1,},
  '& input:invalid + fieldset': {
  borderColor: '#18181b',
  borderWidth: 2,},
  '& input:valid:focus + fieldset': {
  borderLeftWidth: 6,
  padding: '4px !important',},});

  export const ControlsWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;`;

 export const ControlsContainer = styled(Box)`
  width: inherit;
  height: inherit;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;`;

export const ControlsBar = styled(Box)`
  width: 100%;
  opacity: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .5s ease;
  gap: 1rem;
  &:hover {
  opacity: 100%;}`;