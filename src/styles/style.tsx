import { styled, Box, TextField } from '@mui/material';

  export const NavBot = styled('div')`
  display: flex;
  background: #1c1d26;
  text-align: center;
  justify-content: center;
  gap: 213px;
  color: #1c1d26;
  width:100%;
  border-top: 2px solid #6430ff;
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
  border-bottom: 2px solid #6430ff;`

  export const NavTitle = styled('h5')`
  font-size: 20px;
  color: #6430ff;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  margin-top: -45px;
  margin-left: 56px;
  transition: 0.5s;
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
  font-family: poppins, sans-serif;
  display:flex;
  position: absolute;
  color: white;
  left: 75px;
  top: 21%;
  font-weight: 300;
  font-style: normal;
  font-size:18px;
  -webkit-text-stroke: 0.25px black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
  color: #6430ff;`

  export const Icon = styled('div')`
  height: 48px;
  width: 48px;
  border: 2px solid #6430ff;
  border-radius:50px;
  transition: 0.5s;
  margin-top: 10px;
  &:hover {
    -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    border: 2px solid white;`
    
    export const MiniIcon = styled('div')`
    height: 26px;
    width: 26px;
    border: 2px solid #6430ff;
    border-radius:50px;
    transition: 0.5s;
    display:flex;
    position:relative;
    top:125px;
    left: -250px;
    &:hover {
      -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
      -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
      box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
      border: 2px solid white;`

  export const A = styled('a')`
  text-decoration:none;
  margin-top: 0.25rem`

  export const ChatIconBox = styled('div')`
  height: 48px;
  width: 48px;
  display:flex;
  position: relative;
  border: 2px solid #6430ff;
  background: #1f1f28;
  border-radius: 50px;
  right: 10%;
  padding: 12px;
  margin-top: -8px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
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
  margin-top: 15px;
  border-radius: 60px;
  transition: 0.5s;
  position: relative;
  left: 95%;
  cursor: pointer;
  &:hover{
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }`

  export const LockOpenIconBox = styled(`div`)`
  height: 48px;
  width: 48px;
  z-index: auto;
  border: 2px solid #6430ff;
  border-radius: 50px;
  padding: 10px;
  cursor: pointer;
  margin-top: -50px;
  margin-left: 165px;
  transition: 0.5s;
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
  height: 300px;
  width: 300px;
  background: #1c1d26;
  border-radius: 25px;
  position: relative;
  left: 40%;
  top: 25%;
  transition: 0.5s;
  border: 4px solid #6430ff;` 

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
  transition: 0.5s;
  overflow: auto;`

  export const TextFieldBox = styled('div')`
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 35px;
  margin-top: -10%;`

  export const ButtonBox = styled('div')`
  margin-left: 15%;
  margin-top: -8%;
  width: 68%;
  transition: 0.5s;
  border-radius: 50px;
  &:hover{
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);`

  export const BackgroundPlaylist = styled('div')`
  height: 100px;
  width: 400px;
  background: #181818;
  border-radius: 20px;
  margin-bottom: 60px;
  position:relative;
  display:flex;
  top: -35%;
  left: 10px;
  border-left: 3px solid #6430ff;
  text-decoration: none;
  transition: 0.5s;
  &:hover{
    border-right: 3px solid #6430ff;}`

  export const TwitchImgBox = styled('div')`
  margin-top: -60px;
  margin-left: 255px;`

  export const H1 = styled('h1')`
  color:white;
  font-size: 30px;
  padding: 20px;
  display:flex;
  position: relative;
  left: 20%;
  top: -15%;
  -webkit-text-stroke: 0.25px black;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const H2 = styled('h2')`
  color:#6430ff;
  font-size: 15px;
  padding: 20px;
  display: flex;
  position: relative;
  top: 35px;
  left: 55px;
  -webkit-text-stroke: 0.25px black;
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
  display:flex;
  position: relative;
  left: 20px;
  top: 33px;
  -webkit-text-stroke: 0.25px black;
  text-decoration: none;
  text-decoration-color: #6430ff;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const BrugImgBox = styled('div')`
  height: 64px;
  width: 64px;
  margin-left: 40%;
  margin-top: 5%;`

  export const TwitchButton = styled('div')`
  display: flex;
  position: absolute;
  right: 20%;
  top: 10%;
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
  transition: 0.5s;
  &:hover {
  color: #6430ff;}`

  export const TTVimg = styled ('div')`
  display:flex;
  position: absolute;
  right: 8%;
  margin-top: -20px;
  cursor: pointer;
`

  export const DummyDiv = styled('div')`
  height: 1000px;
  background: linear-gradient(180deg, rgba(29,29,38,1) 35%, rgba(38,39,50,1) 173%);`;

  export const PauseBox = styled ('div')`
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;`

  export const IconBox = styled ('div')`
  height: 100%;
  width: 100%;
  display:flex;
  position: relative;
  top: 50%;
  left: 50%;`

  export const BackgroundAccentLogin = {
    backgroundColor: '#6430ff',
    maxWidth: "150px",
    maxHeight: "30px",
    minWidth: "150px",
    minHeight: "20px",
  };

  export const BackgroundAccentChat = {
    backgroundColor: '#6430ff',
    maxWidth: "150px",
    maxHeight: "30px",
    minWidth: "150px",
    minHeight: "20px",
    left: "23%",
  };

  export const BackgroundAccentAdd = {
    backgroundColor: '#6430ff',
    '&:hover':{
      backgroundColor: 'red',
    },
  };

  export const PauseStyle = {
  fontSize: '5rem',
  marginLeft: '-4%',
  color: 'white',
  cursor: 'pointer',
  border: '3px solid #6430ff',
  backgroundColor: 'hsla(253, 100%, 54%, 0.43)',
  borderRadius: '50px',
};

export const MainColor = {
  color: '#6430ff',
};

export const FontStyle = {
  fontSize: '1rem',
  color: 'white',
  backgroundColor: '#6430ff',
  fontFamily: 'poppins, sans-serif',
  fontWeight: '300',
  fontStyle: 'normal',
  borderRadius: '30px',
  transition: '0.5s',
  width: '200px',
};

export const FingerprintColor = {
  fontSize: '1.7rem',
  color: 'white',
};

export const FontOk = {
  color: 'white',
  backgroundColor: '#18181b',
  fontFamily: 'poppins, sans-serif',
  fontWeight: '300',
  fontStyle: 'normal',
  borderRadius: '10px',
  transition: '0.5s',
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
  transition: 0.5s;
  &:hover {
  opacity: 100%;}`;

  export const OptionsBox = styled('div')`
  height: 250px;
  width: 250px;
  display: flex;
  position: relative;
  left: 80%;
  top: 0%;
  background: #18181b;
  border: 2px solid #6430ff;
  border-radius: 20px;
  transition: 1.25s;
  &:hover{
    border: 2px solid hsla(255, 100%, 59%, 0.53) ;
  }`

export const ChatBttn = styled('div')`
display: flex;
position: absolute;
top: 32%;
border-radius: 50px;
height: 45px;`

export const ChatBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;`

export const Transition = {
  transition: '2s',
};