import { Box, Button, styled } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useContext ,useEffect, useState } from 'react';
import 'simplebar/dist/simplebar.min.css';
import { BackgroundAccentAdd ,BackgroundAdd, AddVideoS, TextFieldBox, ButtonBox, FontStyle }  from '@/styles/style'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const AddFunction = () => {
  const { data: session, status } = useSession();
  const [chat, toggleChat] = useState(true);
  const [video, toggleVideo] = useState(false);
  const [login, toggleLogin] = useState(true);
  const [boxadd, toggleBox] = useState(true);
  const [boxremove, removeBox] = useState(true);

const ExitIconBox = styled('div')`
display:flex;
position:absolute;
right: 10px;
top: 10px;
color: #b32222;
transition: 0.5s;
cursor: pointer;
&:hover{
  color: red;}`


    return (      
      <Box> {boxadd && boxremove && 
      <BackgroundAdd>                                                                
            <AddVideoS>
           <ExitIconBox onClick={() => toggleBox((prev) => !prev)}  ><ExitToAppIcon/></ExitIconBox>
                      <TextFieldBox>
                      <p>Dodaj Film!</p>
                          <TextField style={{ backgroundColor: "#18181b" }} InputProps={{ style: { color: "#6430ff" } }} id="filled-basic" label="Link" autoComplete='off' variant="filled" />
                      <p></p>
                          <TextField style={{ backgroundColor: "#18181b" }} InputProps={{ style: { color: "#6430ff" } }} id="filled-basic" label="Tytuł" autoComplete='off' variant="filled" />
                      </TextFieldBox>  
                      <ButtonBox>
            <Button style={FontStyle} variant="contained" onClick={() => toggleBox((prev) => !prev)} >Dodaj<IconButton aria-label="fingerprint" color="secondary"></IconButton></Button>
            </ButtonBox>
            </AddVideoS> 
            </BackgroundAdd>   
            } </Box>
    );
  };

export default AddFunction;