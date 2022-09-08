import { styled, Box, TextField } from '@mui/material';

  export const NavBot = styled('div')`
  display: flex;
  background: #1c1d26;
  margin-top: 100vh;
  text-align: center;
  justify-content: center;
  gap: 213px;
  background: #15161c;
  width:100%;
  border-top: 2px solid #6430ff;
  overflow: hidden;
  height: 80px;`

  export const NavTop = styled('div')`
  display: flex;
  position: absolute;
  height: 80px;
  background: #15161c;
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

  export const Tittle = styled('h1')`
  font-size: 35px;
  color: white;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  -webkit-text-stroke: 0.25px black;
  color: white
  display:flex;
  position: absolute;
  left: 15px;
  bottom: -10px;`

  export const ChatTitle = styled('h5')`
  font-family: poppins, sans-serif;
  display:flex;
  position: absolute;
  margin: 0px;
  color: white;
  left: 75px;
  top: 5.5px;
  font-style: normal;
  font-size: 18px;
  -webkit-text-stroke: 0.25px black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
  color: white;
  -webkit-text-stroke: 1px white;`

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

  export const A = styled('a')`
  text-decoration:none;
  margin-top: 0.25rem`

  export const ChatIconBox = styled('div')`
  height: 48px;
  width: 50px;
  display:flex;
  position: absolute;
  border: 2px solid #6430ff;
  background: #1f1f28;
  border-radius: 50px;
  right: 18%;
  bottom: 42%;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    border: 2px solid white;`
 

  export const NavBox = styled('div')`
  width: 100%;
  height: 100%;`

  export const PlaylistMain = styled('div')`
  width: 100%;
  height: 80%;
`

  export const AddIconBox = styled('div')`
  height: 48px;
  width: 48px;
  margin-top: 15px;
  border-radius: 60px;
  position: absolute;
  margin-top: 10px;
  right: 50px;
  transition: 0.5s;
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
  display:flex;
  position: absolute;
  left: 180px;
  bottom: -60px;
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
  display:flex;
  position: absolute;
  left: 145px;
  bottom: -67px;`

  export const AddVideoS = styled('div')`
  height: 300px;
  width: 300px;
  background-color: #1c1d26;
  border-radius: 25px;
  position: absolute;
  left: 35%;
  top: 25%;
  transition: 0.5s;
  border: 4px solid #6430ff;
  &:hover{
    border-bottom: 4px solid white; 
    animation: bg-animation 5s infinite;
  }` 

  export const BackgroundAdd = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  display: flex;
  background: rgba(3, 0, 5, 0.52);
  padding: 15px;
  transition: 1s;
  overflow: auto;`

  export const TextFieldBox = styled('div')`
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 35px;
  color: white;
  margin-top: -10%;`

  export const ButtonBox = styled('div')`
  display: flex;
  position: absolute;
  top: 75%;
  left: 15%;
  transition: 0.5s;
  border-radius: 50px;
  &:hover{
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);`

  export const H1 = styled('h1')`
  color:white;
  font-size: 30px;
  left: 50px;
  top: 0px;
  display:flex;
  position: relative;
  -webkit-text-stroke: 0.25px black;
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;`

  export const H2 = styled('h2')`
  color:#6430ff;
  font-size: 15px;
  left: -20px;
  top: 60px;
  display: flex;
  position: relative;
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
  left: -15px;
  top: 58px;
  display:flex;
  position: relative;
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
  margin: 0px;
  padding: 0px;`

  export const H5twitch = styled ('h5')`
  font-family: poppins, sans-serif;
  display:flex;
  position: absolute;
  color: white;
  height: 0px;
  right: 35%;
  margin-top: 2px;
  font-style: normal;
  font-size:18px;
  -webkit-text-stroke: 0.25px black;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
  color: #white;
  -webkit-text-stroke: 1px white;}`

  export const TTVimg = styled ('div')`
  display:flex;
  position: absolute;
  right: -5px;
  bottom: -5px;
  margin-top: -20px;
  cursor: pointer;
`

  export const DummyDiv = styled('div')`
  height: 800px;
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
   width: '150px',
   height: '35px',
   left: '29px',
   borderRadius: '20px',
   background: '#6430ff',
  };

  export const BackgroundAccentAdd = {
    backgroundColor: '#6430ff',
    '&:hover':{
      backgroundColor: 'white',
    },
  };
;

export const BackgroundAccentOptions = {
  backgroundColor: '#6430ff',
  height: '35px',
  width: '150px',
  marginLeft: '20%',
  top: '20px',
  borderRadius: '20px',
};

export const BackgroundAccentVideo = {
  backgroundColor: '#6430ff',
  height: '35px',
  width: '150px',
  top: '100px',
  right: '150px',
  borderRadius: '20px',
};

export const MainColor = {
  color: '#6430ff',
};

export const FontStyle = {
  fontSize: '1.45rem',
  color: 'white',
  height: '60px',
  backgroundColor: '#6430ff',
  fontFamily: 'poppins, sans-serif',
  fontWeight: '650',
  fontStyle: 'normal',
  borderRadius: '30px',
  transition: '0.5s',
  width: '200px',
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
    
export const BoxOptions = styled('div')`
height: 250px;
width: 250px;
display: flex;
position: absolute;
right: 1px;`

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
  background: #18181b;
  position: absolute;
  margin-top: 50px;
  right: 50px;
  border: 2px solid hsla(255, 100%, 59%, 0.53);
  border-radius: 20px;
  transition: 1.5s;
  box-shadow: 4px 4px 44px 4px rgb(98 46 255 / 13%);
  &:hover{
    border: 2px solid #6430ff; 
  }`

export const ChatBttn = styled('div')`
display: flex;
position: absolute;
top: 75%;
right: 30%;
margin: 0px;
padding: 0px;`

export const ChatBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: absolute;
right: 98px;
bottom: 10px;`

export const OptionsH1 = styled('div')`
font-size: 1.5rem;
font-family: poppins, sans-serif;
font-weight: 300;
font-style: normal;
display: flex;
position: absolute;
top: -20px;
left: 24%;
-webkit-text-stroke: 0.3px #6430ff ;
transition: 0.5s;
&:hover {
  -webkit-text-stroke: 1px white;
`
export const VideoBttn = styled('div')`
display: flex;
position: absolute;
top: 40%;
left: 10%;
margin: 0px;
padding: 0px;`

export const VideoBox = styled('div')`
maxWidth: 150px;
maxHeight: 30px;
minWidth: 150px;
minHeight: 20px;
display: flex;
position: relative;
bottom: -130px;`

export const VideoTitle = styled('h5')`
font-family: poppins, sans-serif;
display:flex;
position: absolute;
color: white;
left: 36%;
top: 42.5%;
margin: 0px;
font-style: normal;
font-size:18px;
-webkit-text-stroke: 0.25px black;
cursor: pointer;
transition: 0.5s;
&:hover {
  color: white;
  -webkit-text-stroke: 1px white;`

export const BrugBox = styled('div')`
height: 128px;
width: 128px;
display:flex;
position: positive;
left: 10px;
top: 10px;
margin-top: -450px;
margin-left: 15px;`
