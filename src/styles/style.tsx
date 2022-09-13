import { styled, Box,} from '@mui/material';

  export const NavBot = styled('div')`
  display: flex;
  background: #1c1d26;
  margin-top: 10vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 200px;
  background: #15161c;
  width:100%;
  border-top: 1px solid rgba(98, 46, 255, 0.58);
  overflow: hidden;
  height: 80px;
  margin-top: 300px;`

  export const NavTitle = styled('h5')`
  box-shadow: inset 0 0 0 0 #6430ff;
  font-family: poppins, sans-serif;
  text-transform: capitalize;
  font-weight: 500;
  font-style: normal;
  display: flex;
  position: absolute;
  font-size: 18px;
  color: white;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  border-radius: 20px;
  width: 80px;
  margin-top: -40px;
  margin-left: 50px;
  transition: 1s color 1.3s ease-in-out, box-shadow 1.3s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: inset 100px 0 0 0 rgba(255, 255, 255, 0.4);
    color: #6430ff;}`

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


  export const Icon = styled('div')`
  height: 46px;
  width: 46px;
  border: 2px solid #6430ff;
  border-radius:50px;
  transition: 0.5s;
  margin-top: 10px;
  padding: 0px;
  &:hover {
    -webkit-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    -moz-box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    box-shadow: 0px 2px 30px 6px rgba(110, 53, 255, 0.37);
    border: 2px solid white;`

  export const A = styled('a')`
  text-decoration:none;
  margin-top: -10px`

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

  export const BackgroundBefore = styled('div')`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  display: flex;
  background: rgba(0, 0, 0, 0.62);
  padding: 15px;
  transition: all 1s ease;
  overflow: hidden;
  backdrop-filter: blur(10px);
  '.simplebar-scrollbar': {
    '&::before': {
      display: 'none',
      background: '0',
      pointerEvents: '0',
      borderRadius: '0',`

  export const TextFieldBox = styled('div')`
  font-family: poppins, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 35px;
  color: white;
  margin-top: -10%;`


  export const IconBox = styled ('div')`
  height: 100%;
  width: 100%;
  display:flex;
  position: relative;
  top: 50%;
  left: 50%;`
    
export  const AbsoluteBox = styled('div')`
display: flex;
position: absolute;
right: 30px;
top: 10px;`

  export const BeforeFont = styled('h1')`
  text-transform: uppercase;
  background: #6430ff;
  color: #fff;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: textclip 3s linear infinite;
  display: inline-block;
      font-size: 90px;
      margin-bottom: 190px;
      -webkit-text-stroke: 0.4px white;`

export const ContainerBefore = styled('div')`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;`

export const Button1 = styled('div')`
height: 60px;
margin: 0;
display: flex;
position: absolute;
top: 50%;
border-radius: 30px;
transition: all 1s ease-in-out;
text-align: center;
&:hover{
  transform: rotate3d(20,1,10,60deg) ;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
}`

export const LinearBox = styled('div')`
width: 1000px;
height: 10px;
margin: 0;
padding: 0;
display:flex;
position: absolute;
margin-left: 500px;
margin-bottom: 20px;`

export const CodeIconBox = styled('div')`
  cursor:pointer;
  :hover,
  :hover::before{
    transform:rotate(0.25deg);
    transition: .2s  cubic-bezier(0.5,120,0.5,-120); 
  }
  :hover::before {
     transition-delay:.2s; 
  }
  `

export const AHREF = styled('a')`
text-decoration:none;
color: white;
text-weight: 300;
display: flex;
position: absolute;
left: 10px;
bottom: 10px;`

export const NavTop = styled('div')`
height: 80px;
width: 100%;
background: #15161c;
border-bottom: 2px solid rgba(98, 46, 255, 0.58);`

export const H6dashboard = styled('h6')`
font-size: 10px;
color: gray;
opacity: 0.5;
text-transform: capitalize;
`
export const H5dashboard = styled('h5')`
font-size: 10px;
color: white;
opacity: 0.5;
letter-spacing: 10px;
text-transform: capitalize;
`
export const H4dashboard = styled('h4')`
font-size: 20px;
color: white;
text-transform: capitalize;
`

